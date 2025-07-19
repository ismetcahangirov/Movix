"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, onClick }) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        text-gray-400 
        hover:text-gray-200 
        focus:text-gray-200 
        transition-colors duration-300 
        ${isActive ? "text-white font-semibold" : ""}
      `}
    >
      {children}
    </Link>
  );
}
