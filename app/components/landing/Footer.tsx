import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full items-center justify-between flex flex-row px-3 py-2 bg-white/60 border-white backdrop-blur-md rounded-2xl">
      <div className="flex flex-row gap-0 items-center justify-start">
        <div className="px-4">
          <img src="/logo.svg" alt="Logo" className="h-4 w-4 object-contain" />
        </div>
        <FooterLink href="/" label="Home" />
        <FooterLink href="/privacy" label="Privacy Policy" />
        <FooterLink href="/terms" label="Terms of Service" />
      </div>

      <div className="flex flex-row gap-3 items-start justify-start">
        <div className="h-6 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <div className="flex flex-col items-start justify-start gap-0 text-body text-label-primary">
          Monkey seeing. Monkey doing.
          <br />
          <span className="text-black/50 text-footnote">
            All systems operational.
          </span>
        </div>
      </div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="text-body text-black px-4 py-3 cursor-pointer"
    >
      {label}
    </Link>
  );
}
