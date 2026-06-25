import Image from "next/image";

const WORDMARK_CLASS =
  "font-serif italic leading-none tracking-[-6.4px] text-[#2f2822] text-[64px] md:tracking-[-12px] md:text-[120px] lg:tracking-[-21px] lg:text-[210px]";

type LinkItem =
  | string
  | {
      label: string;
      comingSoon?: boolean;
    };

function TaglineBlock({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <p className="text-label font-medium text-[#2f2822]">Note now, think later.</p>
      <p className="text-body text-[rgba(47,40,34,0.5)]">
        Copyright Aneesh Hegde 2026. All rights reserved.
      </p>
    </div>
  );
}

function LinkColumn({
  title,
  items,
  className,
}: {
  title: string;
  items: LinkItem[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      <p className="text-label font-medium text-[rgba(47,40,34,0.5)]">{title}</p>
      {items.map((item) => {
        if (typeof item === "string") {
          return (
            <a
              key={item}
              href="#"
              className="text-label font-medium text-[#2f2822] hover:opacity-80"
            >
              {item}
            </a>
          );
        }

        if (item.comingSoon) {
          return (
            <a
              key={item.label}
              href="#"
              className="text-label font-medium text-[#2f2822] hover:opacity-80"
            >
              {item.label}{" "}
              <span className="text-[rgba(47,40,34,0.5)]">Coming Soon</span>
            </a>
          );
        }

        return (
          <a
            key={item.label}
            href="#"
            className="text-label font-medium text-[#2f2822] hover:opacity-80"
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative flex min-h-[740px] w-full flex-col justify-end gap-6 overflow-hidden bg-[#f4f4f2] px-4 pt-4 pb-16 md:min-h-[900px] md:gap-8 md:p-8 lg:min-h-[740px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/footer/mobile.webp"
          alt=""
          fill
          className="object-cover object-top md:hidden"
          sizes="100vw"
          priority
        />
        <Image
          src="/images/footer/tablet.webp"
          alt=""
          fill
          className="hidden object-cover object-top md:block lg:hidden"
          sizes="100vw"
        />
        <Image
          src="/images/footer/desktop.webp"
          alt=""
          fill
          className="hidden object-cover object-top lg:block"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-6 md:hidden">
          <p className={WORDMARK_CLASS}>Brainbits</p>
          <TaglineBlock />
        </div>

        <p className={`${WORDMARK_CLASS} hidden md:block`}>Brainbits</p>

        <nav aria-label="Footer">
          <div className="grid w-full grid-cols-2 gap-4 md:flex md:gap-8 md:px-2">
            <TaglineBlock className="hidden md:flex md:flex-1" />
            <LinkColumn
              className="md:flex-1"
              title="Product"
              items={["iOS App", { label: "API", comingSoon: true }]}
            />
            <LinkColumn
              className="md:flex-1"
              title="Links"
              items={["Privacy", "Terms of Use", "Contact"]}
            />
            <LinkColumn
              className="md:flex-1"
              title="Connect"
              items={["Blog", "Threads", "Instagram"]}
            />
          </div>
        </nav>
      </div>
    </footer>
  );
}
