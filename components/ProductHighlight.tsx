import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ProductHighlightProps = {
  className?: string;
  children: ReactNode;
};

function ProductHighlight({ className, children }: ProductHighlightProps) {
  return (
    <article
      className={[
        "flex w-[270px] shrink-0 flex-col items-start bg-white",
        "lg:min-w-[270px] lg:max-w-[340px] lg:flex-1 lg:shrink",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </article>
  );
}

type ProductHighlightIconProps = {
  src: string;
  alt?: string;
  className?: string;
};

function ProductHighlightIcon({
  src,
  alt = "",
  className,
}: ProductHighlightIconProps) {
  return (
    <div
      className={[
        "flex h-[270px] w-full items-center justify-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image src={src} alt={alt} width={180} height={180} />
    </div>
  );
}

type ProductHighlightBodyProps = ComponentPropsWithoutRef<"div">;

function ProductHighlightBody({
  className,
  children,
  ...props
}: ProductHighlightBodyProps) {
  return (
    <div
      className={["flex flex-col gap-[11px] text-black", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

type ProductHighlightTitleProps = ComponentPropsWithoutRef<"h3">;

function ProductHighlightTitle({
  className,
  children,
  ...props
}: ProductHighlightTitleProps) {
  return (
    <h3
      className={[
        "text-label leading-none font-medium tracking-[-0.4px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </h3>
  );
}

type ProductHighlightDescriptionProps = ComponentPropsWithoutRef<"p">;

function ProductHighlightDescription({
  className,
  children,
  ...props
}: ProductHighlightDescriptionProps) {
  return (
    <p
      className={["text-body tracking-[-0.325px]", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}

function ProductHighlightDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={["w-px shrink-0 self-stretch bg-[#eee]", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

ProductHighlight.displayName = "ProductHighlight";
ProductHighlightIcon.displayName = "ProductHighlightIcon";
ProductHighlightBody.displayName = "ProductHighlightBody";
ProductHighlightTitle.displayName = "ProductHighlightTitle";
ProductHighlightDescription.displayName = "ProductHighlightDescription";
ProductHighlightDivider.displayName = "ProductHighlightDivider";

export {
  ProductHighlight,
  ProductHighlightIcon,
  ProductHighlightBody,
  ProductHighlightTitle,
  ProductHighlightDescription,
  ProductHighlightDivider,
};
