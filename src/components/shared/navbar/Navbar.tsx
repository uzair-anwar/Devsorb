"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button/button";
import { SERVICES } from "@/lib/services-data";

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Hire Developer", href: "/hire-developer" },
  { name: "Success Stories", href: "#success" },
  { name: "Career", href: "#career" },
  { name: "Contact us", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-main-alpha-40)] py-4 backdrop-blur-md"
          : "bg-transparent py-6 lg:py-8"
      }`}
    >
      <div className="mx-auto max-w-[73.75rem] px-4 lg:max-w-[1229px] lg:px-0">
        <div className="flex h-[2.5rem] items-center justify-between lg:justify-center">
          <div className="hidden w-full items-center justify-center gap-[7rem] lg:flex">
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

            <div className="flex h-[2rem] items-center gap-6">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((s) => !s)}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      className="font-poppins flex cursor-pointer items-center gap-1 align-middle text-[1rem] leading-[1rem] font-normal whitespace-nowrap transition-opacity hover:opacity-70"
                      style={{
                        color: "var(--white)",
                        fontFamily: "var(--font-poppins-stack)",
                      }}
                    >
                      {item.name}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div
                        className="absolute left-1/2 top-full z-[120] mt-3 w-[320px] -translate-x-1/2 rounded-[10px] border border-[rgba(255,255,255,0.08)] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(34,17,88,0.95) 0%, rgba(13,13,25,0.97) 100%)",
                        }}
                        role="menu"
                      >
                        <ul className="flex flex-col">
                          {SERVICES.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                href={`/services/${svc.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="block rounded-[6px] px-3 py-2 text-[13px] text-[rgba(255,255,255,0.75)] transition-colors hover:bg-[rgba(171,145,234,0.12)] hover:text-[var(--text-headline)]"
                                style={{
                                  fontFamily: "var(--font-poppins-stack)",
                                }}
                                role="menuitem"
                              >
                                {svc.navTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-poppins flex items-center gap-1 align-middle text-[1rem] leading-[1rem] font-normal whitespace-nowrap transition-opacity hover:opacity-70"
                    style={{
                      color: "var(--white)",
                      fontFamily: "var(--font-poppins-stack)",
                    }}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>

            <div className="shrink-0">
              <Button
                variant="primary"
                size="sm"
                className="h-10 w-[135px] cursor-pointer whitespace-nowrap px-0"
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
                width={66}
                height={16}
                className="h-4 w-auto object-contain sm:h-[2.0625rem]"
                style={{ width: "auto" }}
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
        className={`fixed inset-0 z-[110] overflow-y-auto bg-[var(--bg-main)] transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col px-8 py-12">
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
            {navItems.map((item, index) =>
              item.hasDropdown ? (
                <div key={item.name} className="flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="font-poppins flex w-full cursor-pointer items-center justify-between text-3xl font-medium transition-all hover:text-[var(--accent-primary)]"
                    style={{
                      color: "var(--white)",
                      transitionDelay: `${index * 50}ms`,
                      fontFamily: "var(--font-poppins-stack)",
                    }}
                  >
                    <span>{item.name}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <ul className="flex flex-col gap-3 pl-3">
                      {SERVICES.map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/services/${svc.slug}`}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block text-[16px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-[var(--accent-primary)]"
                            style={{
                              fontFamily: "var(--font-poppins-stack)",
                            }}
                          >
                            {svc.navTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
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
              ),
            )}
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
