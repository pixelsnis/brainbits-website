type CTAProps = {
  href?: string;
  label?: string;
  finePrint?: string;
  className?: string;
};

export default function CTA({
  href = "#",
  label = "Get it on the App Store",
  finePrint = "iOS 26.0 and above. For iPhone only.",
  className,
}: CTAProps) {
  return (
    <div
      className={["flex flex-col items-center gap-3", className]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href={href}
        className="group relative flex items-center justify-center rounded-full px-6 py-2.5"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black from-50% to-[#666] to-[127.27%]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors group-hover:bg-white/15 group-active:bg-white/30"
        />
        <span className="text-button relative whitespace-nowrap text-white">
          {label}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2px_4px_0px_rgba(255,255,255,0.25),inset_2px_1px_4px_0px_rgba(255,255,255,0.25)]"
        />
      </a>
      <p className="text-caption text-center text-[#aaa]">{finePrint}</p>
    </div>
  );
}
