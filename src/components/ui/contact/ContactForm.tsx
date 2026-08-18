"use client";

import { useState } from "react";
import Button from "@/components/shared/button/button";
import { buildContactMailto, CONTACT_EMAIL } from "@/lib/contact-mailto";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative mx-auto w-full max-w-[1210px] px-4 pb-20 lg:px-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Form card */}
        <div
          className="rounded-[12px] border border-[#3F3F49] px-6 py-6 md:px-10 md:py-6"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0d0d19 0%, #221158 49%, #0d0d19 100%)",
            boxShadow: "0 4px 38.8px rgba(255,255,255,0.05)",
          }}
        >
          <h2
            className="text-[24px] font-medium leading-[1.2] tracking-[-0.6px] text-[var(--text-headline)] md:text-[30px] md:leading-[45px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Ready to Get Started?
          </h2>

          {submitted ? (
            <div
              className="mt-8 flex flex-col gap-4 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-white/5 p-6"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
              role="status"
            >
              <p className="text-[18px] font-medium text-[var(--text-headline)]">
                Almost there — send it from your email app.
              </p>
              <p className="text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)]">
                Direct sending from the site is coming soon. Your message is
                ready as a pre-filled email draft — or reach us any time at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--accent-primary)] underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <a
                href={buildContactMailto(form)}
                className="inline-flex h-[40px] w-fit items-center justify-center rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-4 text-[16px] font-medium leading-none text-[#150544] shadow-[0_0_16px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
              >
                Open email draft
              </a>
            </div>
          ) : (
          <form
            className="mt-8 flex flex-col gap-[15px]"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <FormInput
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                aria-label="First Name"
                required
              />
              <FormInput
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>

            <FormInput
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
            />

            <FormInput
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              aria-label="Phone Number"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              aria-label="Message"
              required
              className="w-full resize-none rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[15px] tracking-[-0.15px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            />

            <div className="mt-2">
              <Button variant="primary" size="sm" type="submit" className="w-fit">
                Get In Touch
              </Button>
            </div>
          </form>
          )}
        </div>

        {/* Info card */}
        <div
          className="rounded-[12px] border border-[#3F3F49] p-6 md:px-6 md:py-6"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0d0d19 0%, #221158 49%, #0d0d19 100%)",
          }}
        >
          <div className="flex flex-col gap-5">
            <h2
              className="text-[24px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[30px] md:leading-[30px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Always Here To Help You
            </h2>
            <p
              className="max-w-[506px] text-[15px] leading-[1.5] text-[rgba(255,255,255,0.65)] md:text-[18px] md:leading-[24px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Share your details in the form and let us know your requirements.
              Our team will review your needs and get back to you with the next
              steps.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-6 md:mt-16">
            <InfoRow
              title="Visit Our Office"
              subtitle="Lahore, Pakistan"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              }
            />
            <InfoRow
              title="Email Us"
              subtitle="hr@devsorb.com"
              href="mailto:hr@devsorb.com"
              icon={
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M2 3l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <InfoRow
              title="Contact us"
              subtitle="www.devsorb.com"
              href="https://www.devsorb.com"
              external
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="text"
    {...props}
    className={`w-full rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[15px] tracking-[-0.15px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40 ${className}`}
    style={{ fontFamily: "var(--font-inter), sans-serif" }}
  />
);

type InfoRowProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
};

const InfoRow = ({ title, subtitle, icon, href, external }: InfoRowProps) => {
  const text = (
    <div className="flex flex-col gap-1">
      <span
        className="text-[16px] font-medium leading-[1] text-[var(--text-headline)] md:text-[18px]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </span>
      <span
        className="text-[14px] font-medium text-[rgba(255,255,255,0.65)] md:text-[16px]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {subtitle}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[18px] text-white"
        style={{ backgroundColor: "rgb(41, 27, 90)" }}
      >
        {icon}
      </div>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="transition-opacity hover:opacity-80"
        >
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
};

export default ContactForm;
