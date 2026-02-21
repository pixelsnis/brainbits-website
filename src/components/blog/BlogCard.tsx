import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  href: string;
}

export function BlogCard({
  category,
  title,
  description,
  date,
  imageUrl,
  href,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={href}
      className="flex flex-col md:flex-row gap-[24px] items-start md:items-center w-full hover:opacity-80 transition-opacity"
    >
      <div className="relative h-[180px] rounded-[24px] shrink-0 w-full md:w-[240px] overflow-hidden bg-[#eee]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 240px"
        />
      </div>
      <div className="flex flex-col gap-[8px] justify-center flex-1">
        <p className="font-sans font-semibold leading-normal text-[#aaa] text-[12px] tracking-[6px] uppercase">
          {category}
        </p>
        <p className="font-display font-medium leading-[1.3] text-black text-[16px] md:text-[24px]">
          {title}
        </p>
        <p className="font-sans font-normal leading-[1.3] text-black text-[16px] line-clamp-2">
          {description}
        </p>
        <p className="font-sans font-normal leading-[1.3] text-[#aaa] text-[16px]">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}
