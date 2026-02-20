import Image from "next/image";

export function Navbar() {
  return (
    <nav className="hidden md:flex gap-[8px] items-center h-[54px]">
      <div className="bg-white flex-1 h-full flex items-center px-[18px] rounded-full">
        <Image
          src="/images/Logo.svg"
          alt="Brainbits logo"
          width={31}
          height={28}
          priority
        />
      </div>
      <a
        href="#"
        className="bg-black text-white h-full flex items-center justify-center px-[24px] rounded-full shrink-0 font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
      >
        Download
      </a>
    </nav>
  );
}
