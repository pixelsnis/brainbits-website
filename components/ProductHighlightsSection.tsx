import {
  ProductHighlight,
  ProductHighlightBody,
  ProductHighlightDescription,
  ProductHighlightDivider,
  ProductHighlightIcon,
  ProductHighlightTitle,
} from "@/components/ProductHighlight";

const cardClassName = "shrink-0 snap-start md:shrink md:flex-1";

export default function ProductHighlightsSection() {
  return (
    <section className="flex w-full justify-center px-8">
      <div className="flex w-full max-w-[1100px] items-start gap-8 overflow-x-auto snap-x snap-mandatory md:justify-center md:overflow-visible">
        <ProductHighlight className={cardClassName}>
          <ProductHighlightIcon
            src="/images/icons/speedometer.svg"
            alt=""
          />
          <ProductHighlightBody>
            <ProductHighlightTitle>
              Local-First &amp; Blazing Fast
            </ProductHighlightTitle>
            <ProductHighlightDescription>
              No more spinners. Brainbits saves locally first, then syncs and
              processes notes entirely in the background.
            </ProductHighlightDescription>
          </ProductHighlightBody>
        </ProductHighlight>

        <ProductHighlightDivider />

        <ProductHighlight className={cardClassName}>
          <ProductHighlightIcon src="/images/icons/sparkle.svg" alt="" />
          <ProductHighlightBody>
            <ProductHighlightTitle>
              AI That Stays Out of Your Way
            </ProductHighlightTitle>
            <ProductHighlightDescription>
              Every AI feature is built to work in the background. By the time
              you need something, it&apos;s already been taken care of.
            </ProductHighlightDescription>
          </ProductHighlightBody>
        </ProductHighlight>

        <ProductHighlightDivider />

        <ProductHighlight className={cardClassName}>
          <ProductHighlightIcon src="/images/icons/swift.svg" alt="" />
          <ProductHighlightBody>
            <ProductHighlightTitle>Native &amp; Lightweight</ProductHighlightTitle>
            <ProductHighlightDescription>
              Under 25 MB. Zero bloat. It feels like it belongs on your phone
              because it was built just for it.
            </ProductHighlightDescription>
          </ProductHighlightBody>
        </ProductHighlight>
      </div>
    </section>
  );
}
