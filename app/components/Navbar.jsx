import Link from "next/link";
import React from "react";

const navItems = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="border border-transparent py-10 flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
      <nav className={`grid grid-cols-3 sm:grid-cols-3 w-full md:w-1/2 items-center self-center content-center text-center`}>
        {navItems.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex items-center justify-center border-dotted border-y border-primary tracking-wide min-h-[80px] text-center uppercase text-[13px] md:text-[14px] group -mr-[1px] last:mr-0"
            >
              <p className="group-hover:scale-102 group-hover:tracking-wide group-hover:font-bold group-hover:text-hayley transition-all duration-300 ease-out">
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
