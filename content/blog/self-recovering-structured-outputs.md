---
title: "AI Sucks at Structured Outputs. Here's How I Fixed It."
description: "Every LLM can produce malformed JSON — even the good ones. Here's a simple pattern using tool calls to make your AI logic self-recovering."
date: "2026-02-22"
category: "ENGINEERING"
imageUrl: "/images/blog/self-recovering-structured-outputs.webp"
published: true
---

If your app uses AI to generate structured outputs, you've probably seen JSON parsing errors in your logs more than you'd like.

The core problem is this: no matter how capable a model is, it can occasionally produce a malformed response. And when it does, you have a few bad options:

- **No retries** — the entire request fails, and the user sees an error.
- **Blind retries** — you re-run the whole request, but the model gets no feedback on what it did wrong. It's likely to fail the same way again.

Neither is good enough for production.

I ran into this exact issue building Brainbits. Someone would save a note, the AI would try to structure it — and sometimes just... fail silently. The note would never get properly memorised.

Here's the pattern I now use everywhere to make structured outputs self-recovering.

---

## The naive approach (and why it breaks)

Most guides show you something like this:

```ts
// Structured output with the AI SDK — simple, but fragile
const generated = await generateText({
  model: gateway("openai/gpt-oss-120b"),
  system: "Turn a user's order into a JSON output for cupcakes.",
  output: Output.object({
    schema: z.object({
      items: z.array(
        z.object({
          item: z.string(),
          amount: z.number(),
        })
      ),
      customInstructions: z.string().optional(),
    }),
  }),
  prompt: "I want 5 red velvet and 3 chocolate cupcakes, no icing on the chocolate ones",
});

const output = generated.output;
```

This works most of the time. But if the model produces a malformed response, `generated.output` will be `null` or throw — and you have no clean way to recover without re-running the entire request from scratch.

---

## The fix: use a tool call instead

Instead of relying on structured output mode, you give the model a tool whose job is to store the result. This turns output generation into a tool call — and tool calls are something models are much better at self-correcting on.

Here's the full pattern in three steps.

### 1. Define your schema and output variable

Pull the schema out into its own constant and declare a mutable variable to hold the result. This needs to live outside the agent call so it's accessible after the loop ends.

```ts
// Define the output shape using Zod — same schema as before,
// but now it's a standalone constant we can reuse.
const OutputSchema = z.object({
  items: z.array(
    z.object({
      item: z.string(),
      amount: z.number(),
    })
  ),
  customInstructions: z.string().optional(),
});

type OutputType = z.infer<typeof OutputSchema>;

// This will be populated by the tool call below.
// Starts as null so we can detect failures explicitly.
let output: OutputType | null = null;
```

### 2. Create a "createOutput" tool

This tool's only job is to accept the structured data and write it to `output`. When the model calls it successfully, we know the output is valid — [Zod](https://zod.dev) validates the shape at the boundary.

```ts
const createOutputTool = tool({
  description: "Generates and stores the final structured output.",
  inputSchema: OutputSchema, // Zod validates the shape before execute() runs
  outputSchema: z.object({
    status: z.literal("OK"),
  }),
  execute: async (input) => {
    // At this point, `input` is guaranteed to match OutputSchema.
    // We write it to the outer variable so the caller can use it.
    output = input;
    return { status: "OK" };
  },
});
```

### 3. Replace structured output with the tool

Swap out the `output` field for a `tools` object, update your system prompt to tell the model to use the tool, and add a `stopWhen` condition.

```ts
const generated = await generateText({
  model: gateway("openai/gpt-oss-120b"),
  system: `Turn a user's order into a JSON output for cupcakes.
           Use the createOutput tool to store the result.
           Once you have successfully called createOutput, reply with the single word: Done.`,
  tools: {
    createOutput: createOutputTool,
  },
  stopWhen: [
    // Allow the model up to 5 steps so it can self-correct after
    // a failed or malformed tool call before we give up.
    stepCountIs(5),
  ],
  prompt: "I want 5 red velvet and 3 chocolate cupcakes, no icing on the chocolate ones",
});

// If the model never called createOutput (e.g. hit the step limit),
// output will still be null. Handle it explicitly here and let
// higher-level logic decide whether to retry.
if (!output) {
  throw new Error("Failed to generate output after maximum retries");
}

// If we get here, the output is valid and ready to use.
console.info(`Generated output: ${JSON.stringify(output)}`);
```

---

## Why this works

The key insight is the `stepCountIs(5)` limit combined with tool-call feedback. When a tool call is malformed — wrong shape, missing fields, type mismatch — the [AI SDK](https://sdk.vercel.ai/docs) sends the validation error back to the model as context for the next step. The model sees exactly what it got wrong and tries again.

You might notice I *don't* use `hasToolCall("createOutput")` as a stop condition, even though it seems like the obvious choice. The problem is that `hasToolCall` fires the moment the tool is *called* — before Zod has a chance to validate the input. So a bad call would still short-circuit the retry loop, breaking the whole point of the pattern.

Instead, the system prompt tells the model to reply with `"Done"` after a successful call. That keeps the stop logic simple (`stepCountIs` only) while still giving the model a clear signal for when it's finished.

In practice, I've found the model self-corrects on the second attempt in almost every case. The 5-step limit is just a safety net.

---

## Wrapping up

This is a small change — maybe 20 extra lines of code — but it makes a big difference in production reliability.

The tradeoff is a tiny bit of extra complexity in setup. The payoff is that your AI logic becomes genuinely resilient: the model gets to recover from its own mistakes instead of surfacing errors to your users.

If you're building anything AI-powered, I'd recommend defaulting to this pattern over structured outputs from the start.

<BrainbitsPlug/>