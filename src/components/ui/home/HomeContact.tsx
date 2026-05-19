"use client";

import { useState } from "react";

const HomeContact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-4 py-20 lg:px-0">
      {/* Decorative dotted pattern — top-right section background */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[360px] w-[220px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "linear-gradient(225deg, rgba(0,0,0,0.7) 20%, transparent 65%)",
          WebkitMaskImage:
            "linear-gradient(225deg, rgba(0,0,0,0.7) 20%, transparent 65%)",
        }}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[6fr_7fr] lg:gap-4">
        {/* Left: image + secondary text + contacts */}
        <div className="flex flex-col gap-6">
          {/* Image with dotted grid overlay */}
          <div className="relative overflow-hidden rounded-[12px] h-[300px] lg:h-[430px]">
            <img
              src="/assets/home_contact.png"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
            {/* Dark gradient fade */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 40%, rgba(13,13,25,0.8) 100%)",
              }}
            />
            {/* Dotted grid pattern — bottom-right corner */}
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-[140px] w-[200px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
                maskImage:
                  "linear-gradient(135deg, transparent 30%, rgba(0,0,0,0.8) 70%)",
                WebkitMaskImage:
                  "linear-gradient(135deg, transparent 30%, rgba(0,0,0,0.8) 70%)",
              }}
            />
          </div>

          {/* Secondary description + contacts */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[14px] leading-[1.7] text-[rgba(255,255,255,0.45)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Share your details in the form and let us know your requirements.
              Our team will review your needs and get back to you with the next
              steps.
            </p>

            <div className="mt-1 flex flex-col gap-3">
              <a
                href="mailto:hr@devsorb.com"
                className="flex items-center gap-2.5 text-[14px] text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--accent-primary)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                hr@devsorb.com
              </a>
              <a
                href="https://www.devsorb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[14px] text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--accent-primary)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                www.devsorb.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: primary description + form card */}
        <div className="flex flex-col gap-4">
          {/* Primary description above form card */}
          <p
            className="text-[16px] leading-[1.7] text-white lg:text-[18px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Tell us about your idea, project, or business goals, and our team
            will help turn them into a scalable, high performing solution.
          </p>

          {/* Form card */}
          <div
            className="rounded-[16px] border border-[rgba(255,255,255,0.15)] px-7 py-8"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0d0d19 0%, #221158 49%, #0d0d19 100%)",
              boxShadow: "0 4px 40px rgba(255,255,255,0.04)",
            }}
          >
            <h2
              className="mb-6 text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[var(--text-headline)] md:text-[30px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Ready to Get Started?
            </h2>

            <form
              className="flex flex-col gap-[14px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>

              <FormField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[14px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              />

              <div className="mt-1">
                <button
                  type="submit"
                  className="inline-flex h-[40px] items-center justify-center rounded-[6px] bg-white px-5 text-[14px] font-medium text-[#0d0d19] transition-colors hover:bg-white/90"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  Get In Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label={label}
    className="w-full rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[14px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40"
    style={{ fontFamily: "var(--font-poppins-stack)" }}
  />
);

export default HomeContact;
