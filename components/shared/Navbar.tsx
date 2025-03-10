"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navlinks array
  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Ad Campaign", href: "/ad-campaign" },
    { name: "Company", href: "#" },
    { name: "FOV Chat", href: "#" },
  ];

  return (
    <nav className="w-full wrapper   py-5 flex items-center justify-between border-b border-gray-800">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <div
        className={`hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8 mx-4`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block text-white hover:text-primary text-sm 2xl:text-base hover:underline "
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className=" md:hidden">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-[#03060B] text-white border-none">
          <SheetHeader className="mb-6">
            <Image src="/logo.svg" alt="logo" width={70} height={70} />
          </SheetHeader>
          <div
            className={` flex items-center justify-center w-full h-full flex-col gap-4  pb-64`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-white hover:text-primary text-sm lg:text-base py-2 md:py-0"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={"/auth"}
              className="bg-primary w-3/4 text-center px-4 2xl:px-6 font-semibold text-sm 2xl:text-base text-white py-2.5 2xl:py-3 rounded-md"
            >
              Log In
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Login Button */}
      <Link
        href={"/auth"}
        className="bg-primary hidden md:block px-4 2xl:px-6 font-semibold text-sm 2xl:text-base text-white py-2.5 2xl:py-3 rounded-md"
      >
        Log In
      </Link>
    </nav>
  );
}
