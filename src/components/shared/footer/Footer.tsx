import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Careers", href: "#career" },
  { name: "Contact", href: "/contact-us" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(180deg, #221158 0%, #0d0d19 100%)",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-4 py-16 lg:px-0 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[14px] font-semibold text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--accent-primary)]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[14px] font-semibold text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Follow Us
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--accent-primary)]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    <span className="text-[rgba(255,255,255,0.35)]">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[14px] font-semibold text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-[13px] text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "var(--font-poppins-stack)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Lahore, Pakistan
              </li>
              <li>
                <a
                  href="mailto:hr@devsorb.com"
                  className="flex items-center gap-2 text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[var(--accent-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 4l8 9 8-9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  hr@devsorb.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.devsorb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[var(--accent-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  www.devsorb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[rgba(255,255,255,0.07)] pt-6">
          <p
            className="text-center text-[12px] text-[rgba(255,255,255,0.45)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Copyright © 2024 Devsorb All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
