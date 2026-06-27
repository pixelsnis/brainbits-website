import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/webp";

export default async function Icon() {
  const buffer = await readFile(
    join(process.cwd(), "public/images/App Icon.webp"),
  );

  return new Response(buffer, {
    headers: { "Content-Type": contentType },
  });
}
