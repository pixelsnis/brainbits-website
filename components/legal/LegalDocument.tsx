"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type LegalDocumentProps = {
  className?: string;
  children: ReactNode;
};

function LegalDocument({ className, children }: LegalDocumentProps) {
  return (
    <article
      className={[
        "flex w-full max-w-full flex-col items-center px-4 pt-[90px] pb-24 md:pt-[120px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <motion.div
        variants={staggerContainer(0.18)}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col gap-16 lg:max-w-[752px]"
      >
        {children}
      </motion.div>
    </article>
  );
}

type LegalDocumentHeaderProps = ComponentPropsWithoutRef<"header">;

function LegalDocumentHeader({
  className,
  children,
  ...props
}: LegalDocumentHeaderProps) {
  return (
    <motion.header
      variants={staggerContainer(0)}
      className={[
        "flex flex-col gap-6 text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...(props as ComponentPropsWithoutRef<typeof motion.header>)}
    >
      {children}
    </motion.header>
  );
}

type LegalDocumentTitleProps = ComponentPropsWithoutRef<"h1">;

function LegalDocumentTitle({
  className,
  children,
  ...props
}: LegalDocumentTitleProps) {
  return (
    <motion.h1
      variants={fadeUp}
      className={["text-black", className].filter(Boolean).join(" ")}
      {...(props as ComponentPropsWithoutRef<typeof motion.h1>)}
    >
      {children}
    </motion.h1>
  );
}

type LegalDocumentUpdatedProps = ComponentPropsWithoutRef<"p">;

function LegalDocumentUpdated({
  className,
  children,
  ...props
}: LegalDocumentUpdatedProps) {
  return (
    <motion.p
      variants={fadeUp}
      className={[
        "text-caption text-[rgba(47,40,34,0.5)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...(props as ComponentPropsWithoutRef<typeof motion.p>)}
    >
      {children}
    </motion.p>
  );
}

type LegalDocumentIntroProps = ComponentPropsWithoutRef<"div">;

function LegalDocumentIntro({
  className,
  children,
  ...props
}: LegalDocumentIntroProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={[
        "flex flex-col gap-4 text-body-lg text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...(props as ComponentPropsWithoutRef<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}

type LegalDocumentSectionProps = ComponentPropsWithoutRef<"section"> & {
  id?: string;
};

function LegalDocumentSection({
  id,
  className,
  children,
  ...props
}: LegalDocumentSectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      className={[
        "flex scroll-mt-24 flex-col gap-4 text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...(props as ComponentPropsWithoutRef<typeof motion.section>)}
    >
      {children}
    </motion.section>
  );
}

type LegalDocumentSectionTitleProps = ComponentPropsWithoutRef<"h2">;

function LegalDocumentSectionTitle({
  className,
  children,
  ...props
}: LegalDocumentSectionTitleProps) {
  return (
    <h2
      className={["text-black", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </h2>
  );
}

type LegalDocumentSectionBodyProps = ComponentPropsWithoutRef<"div">;

function LegalDocumentSectionBody({
  className,
  children,
  ...props
}: LegalDocumentSectionBodyProps) {
  return (
    <div
      className={[
        "flex flex-col gap-3 text-body text-black",
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

type LegalDocumentParagraphProps = ComponentPropsWithoutRef<"p">;

function LegalDocumentParagraph({
  className,
  children,
  ...props
}: LegalDocumentParagraphProps) {
  return (
    <p
      className={["text-body-lg text-black", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}

type LegalDocumentListProps = ComponentPropsWithoutRef<"ul">;

function LegalDocumentList({
  className,
  children,
  ...props
}: LegalDocumentListProps) {
  return (
    <ul
      className={[
        "flex list-disc flex-col gap-2 pl-5 text-body-lg text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </ul>
  );
}

type LegalDocumentListItemProps = ComponentPropsWithoutRef<"li">;

function LegalDocumentListItem({
  className,
  children,
  ...props
}: LegalDocumentListItemProps) {
  return (
    <li
      className={["text-body-lg text-black", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </li>
  );
}

LegalDocument.displayName = "LegalDocument";
LegalDocumentHeader.displayName = "LegalDocumentHeader";
LegalDocumentTitle.displayName = "LegalDocumentTitle";
LegalDocumentUpdated.displayName = "LegalDocumentUpdated";
LegalDocumentIntro.displayName = "LegalDocumentIntro";
LegalDocumentSection.displayName = "LegalDocumentSection";
LegalDocumentSectionTitle.displayName = "LegalDocumentSectionTitle";
LegalDocumentSectionBody.displayName = "LegalDocumentSectionBody";
LegalDocumentParagraph.displayName = "LegalDocumentParagraph";
LegalDocumentList.displayName = "LegalDocumentList";
LegalDocumentListItem.displayName = "LegalDocumentListItem";

export {
  LegalDocument,
  LegalDocumentHeader,
  LegalDocumentTitle,
  LegalDocumentUpdated,
  LegalDocumentIntro,
  LegalDocumentSection,
  LegalDocumentSectionTitle,
  LegalDocumentSectionBody,
  LegalDocumentParagraph,
  LegalDocumentList,
  LegalDocumentListItem,
};
