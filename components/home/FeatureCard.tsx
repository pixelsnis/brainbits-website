import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";

export type FeatureCardLayout = "hl" | "hr" | "v";

function featureCardRootClass(layout: FeatureCardLayout, className?: string) {
  const base = "flex w-full bg-white";
  const mobile = "flex-col gap-6";
  const horizontalHl =
    "md:h-[320px] md:flex-row md:items-center md:gap-0 md:border md:border-[#eee]";
  const horizontalHr =
    "md:h-[320px] md:flex-row-reverse md:items-center md:gap-0 md:border md:border-[#eee]";
  const vertical = "md:flex-col md:gap-6";

  if (layout === "v") {
    return [base, mobile, vertical, className].filter(Boolean).join(" ");
  }

  if (layout === "hr") {
    return [base, mobile, horizontalHr, className].filter(Boolean).join(" ");
  }

  return [base, mobile, horizontalHl, className].filter(Boolean).join(" ");
}

type FeatureCardProps = {
  layout: FeatureCardLayout;
  className?: string;
  children: ReactNode;
};

function FeatureCard({ layout, className, children }: FeatureCardProps) {
  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (child.type === FeatureCardThumbnail || child.type === FeatureCardBody) {
      return cloneElement(child as ReactElement<{ layout?: FeatureCardLayout }>, {
        layout,
      });
    }

    return child;
  });

  return (
    <article className={featureCardRootClass(layout, className)}>
      {enhancedChildren}
    </article>
  );
}

type FeatureCardThumbnailProps = {
  layout?: FeatureCardLayout;
  src?: string;
  alt?: string;
  className?: string;
};

function FeatureCardThumbnail({
  layout = "hl",
  src,
  alt = "",
  className,
}: FeatureCardThumbnailProps) {
  const sizeClass =
    layout === "v"
      ? "h-[320px] w-full"
      : "h-[320px] w-full md:h-[320px] md:w-[360px] md:shrink-0";

  const hasImage = Boolean(src);

  return (
    <div
      className={[
        "relative overflow-hidden bg-[#eee]",
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage && (
        <img
          src={src!}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </div>
  );
}

type FeatureCardBodyProps = ComponentPropsWithoutRef<"div"> & {
  layout?: FeatureCardLayout;
};

function FeatureCardBody({
  layout = "hl",
  className,
  children,
  ...props
}: FeatureCardBodyProps) {
  const layoutClass =
    layout === "v"
      ? "px-6"
      : "px-6 md:flex-1 md:justify-center md:px-8";

  return (
    <div
      className={[
        "flex flex-col gap-4 text-black",
        layoutClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

type FeatureCardTitleProps = ComponentPropsWithoutRef<"h2">;

function FeatureCardTitle({ className, children, ...props }: FeatureCardTitleProps) {
  return (
    <h2
      className={[
        "font-serif text-[32px] leading-none font-normal tracking-[-0.8px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </h2>
  );
}

type FeatureCardDescriptionProps = ComponentPropsWithoutRef<"p">;

function FeatureCardDescription({
  className,
  children,
  ...props
}: FeatureCardDescriptionProps) {
  return (
    <p className={["text-body", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}

FeatureCard.displayName = "FeatureCard";
FeatureCardThumbnail.displayName = "FeatureCardThumbnail";
FeatureCardBody.displayName = "FeatureCardBody";
FeatureCardTitle.displayName = "FeatureCardTitle";
FeatureCardDescription.displayName = "FeatureCardDescription";

export {
  FeatureCard,
  FeatureCardThumbnail,
  FeatureCardBody,
  FeatureCardTitle,
  FeatureCardDescription,
};
