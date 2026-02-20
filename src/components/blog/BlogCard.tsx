import Link from "next/link";
import React from "react";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

export function BlogCard({
  category,
  title,
  description,
  date,
  href,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col md:flex-row gap-[24px] items-start md:items-center w-full group cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="bg-[#eee] h-[180px] rounded-[24px] shrink-0 w-full md:w-[240px] relative overflow-hidden" />
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
          {date}
        </p>
      </div>
    </Link>
  );
}
