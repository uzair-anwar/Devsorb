"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "/about" },
    { name: "Hire Developer", href: "#hire" },
    { name: "Success Stories", href: "#success" },
    { name: "Career", href: "#career" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-main-alpha-40)] py-4 backdrop-blur-md"
          : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto max-w-[73.75rem] px-4 lg:px-0">
        <div className="flex h-[2.5rem] items-center justify-between lg:justify-center">
          <div className="hidden w-full items-center justify-center gap-[8rem] lg:flex">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/assets/logo.svg"
                alt="Devsorb"
                width={153}
                height={36}
                className="h-[2.5rem] w-auto object-contain"
                priority
              />
            </Link>

            <div className="flex h-[2rem] items-center gap-[1.9375rem]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-poppins align-middle text-[1rem] leading-[1rem] font-normal whitespace-nowrap transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--white)",
                    fontFamily: "var(--font-poppins-stack)",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="shrink-0">
              <Button
                variant="primary"
                size="sm"
                className="cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex w-full items-center justify-between lg:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Devsorb"
                width={120}
                height={28}
                className="h-[1.75rem] w-auto object-contain"
              />
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer !p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[110] bg-[var(--bg-main)] transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-12">
          <div className="mb-16 flex items-center justify-between">
            <Image
              src="/assets/logo.svg"
              alt="Devsorb"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer !p-2"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>
          </div>

          <div className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-poppins text-3xl font-medium transition-all hover:pl-2 hover:text-[var(--accent-primary)]"
                style={{
                  color: "var(--white)",
                  transitionDelay: `${index * 50}ms`,
                  fontFamily: "var(--font-poppins-stack)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-8 border-t border-[var(--white)]/10 pt-8">
              <Button
                variant="primary"
                size="lg"
                className="!w-full cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
