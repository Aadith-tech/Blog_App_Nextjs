"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/post",
    label: "Posts",
  },
  {
    href: "create-post",
    label: "Create post",
  },
] as const;

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={35}
          height={35}
          className=" w-[35px] h-[35px]"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link
                className={`${
                  pathname === navLink.href ? "text-zinc-900" : "text-zinc-400"
                }`}
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
