import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="px-6">
        <img src="/logo.svg" alt="Logo" className="h-6 w-6 object-contain" />
      </div>

      <div className="flex flex-row gap-0 px-3 items-center justify-center">
        <NavbarHref href="/privacy" label="Privacy" />
        <NavbarHref href="/terms" label="Terms" />
        <a
          href="https://apps.apple.com/us/app/brainbits-personal-memory/id6753618169"
          className="text-body px-4 py-3 no-underline text-black"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function NavbarHref({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-body px-4 py-3 cursor-pointer">
      {label}
    </Link>
  );
}
