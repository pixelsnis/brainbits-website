export function Footer() {
  return (
    <footer className="bg-black rounded-[48px] md:rounded-[64px] overflow-hidden flex flex-col justify-end p-[36px] md:px-[36px] md:py-[36px] h-[560px]">
      {/* Mobile footer shows "Brainbits", tablet+ shows full text */}
      <p className="font-display font-medium text-white leading-[1.1] tracking-[-0.8px] mb-[16px] text-[32px] md:hidden">
        Brainbits
      </p>
      <p className="font-display font-medium text-white leading-[1.1] tracking-[-3px] mb-[16px] text-[64px] lg:text-[120px] hidden md:block">
        Braaaaaaaaaaaainbits!
      </p>
      <div className="flex flex-col gap-[16px]">
        <p className="font-display font-medium text-[16px] leading-[1.2] text-white">
          Note now, think later.
        </p>
        <div className="flex gap-0">
          <div className="flex flex-col gap-[12px] flex-1">
            <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
              Links
            </p>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-[12px] flex-1">
            <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
              Connect
            </p>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Threads
            </a>
            <a
              href="#"
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
