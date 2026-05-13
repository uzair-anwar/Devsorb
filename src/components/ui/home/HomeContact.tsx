"use client";

import { useState } from "react";
import Button from "@/components/shared/button/button";

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
    <section id="contact" className="relative mx-auto w-full max-w-[1180px] px-4 py-20 lg:px-0">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: image + info */}
        <div className="flex flex-col gap-8">
          {/* Image */}
          <div className="relative h-[300px] overflow-hidden rounded-[12px] lg:h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&auto=format&fit=crop"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 50%, rgba(13,13,25,0.85) 100%)",
              }}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[15px] leading-[1.7] text-[rgba(255,255,255,0.6)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Tell us about your idea, project, or business goals, and our team
              will help turn them into a scalable, high performing solution.
            </p>
            <p
              className="text-[14px] leading-[1.7] text-[rgba(255,255,255,0.45)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Share your details in the form and let us know your requirements.
              Our team will review your needs and get back to you with the next
              steps.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:hr@devsorb.com"
                className="flex items-center gap-2 text-[14px] text-[rgba(255,255,255,0.55)] hover:text-[var(--accent-primary)] transition-colors"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 4l8 9 8-9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                hr@devsorb.com
              </a>
              <a
                href="https://www.devsorb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-[rgba(255,255,255,0.55)] hover:text-[var(--accent-primary)] transition-colors"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                www.devsorb.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-[28px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[36px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Get Started?
          </h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[14px] text-white placeholder-[rgba(255,255,255,0.3)] outline-none transition-colors focus:border-[rgba(171,145,234,0.5)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              />
            </div>

            <Button variant="primary" size="sm" type="submit" className="w-fit">
              Get In Touch
            </Button>
          </form>
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
  <div className="flex flex-col gap-1.5">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={label}
      className="w-full rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[14px] text-white placeholder-[rgba(255,255,255,0.3)] outline-none transition-colors focus:border-[rgba(171,145,234,0.5)]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    />
  </div>
);

export default HomeContact;
