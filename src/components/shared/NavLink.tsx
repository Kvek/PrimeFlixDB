"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";

export const NavLink: WrapperComponentType<LinkProps<string>> = ({
  children,
  className,
  href,
  ...props
}) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      {...props}
      className={cn(
        isActive ? "opacity-100" : "opacity-80 hover:opacity-100",
        className,
        isActive && "[&>svg]:fill-[#00FFDB]",
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
