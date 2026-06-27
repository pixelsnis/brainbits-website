"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ComingSoonLinkProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export default function ComingSoonLink({
  children,
  className,
  label = "Coming soon!",
}: ComingSoonLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        aria-disabled="true"
        className={cn(
          "cursor-default bg-transparent p-0 font-inherit hover:opacity-80",
          className,
        )}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>{label}</TooltipContent>
    </Tooltip>
  );
}
