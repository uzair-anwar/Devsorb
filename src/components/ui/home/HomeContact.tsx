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
    <section id="contact" className="relative mx-auto w-full max-w-[1172px] overflow-hidden px-4 py-20 lg:h-[729px] lg:px-0 lg:py-0">
      <div className="relative z-10 flex flex-col gap-8 lg:h-[629px] lg:block">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[178px] top-[28px] z-0 hidden h-[498px] w-[994px] lg:block"
        >
          <img
            src="/assets/home_contact_mask.png"
            alt=""
            className="h-full w-full object-fill"
          />
        </div>

        {/* Left: image + secondary text + contacts */}
        <div className="relative z-10 flex flex-col gap-6 lg:contents">
          {/* Image with dotted grid overlay */}
          <div className="relative h-[300px] overflow-hidden rounded-[12px] lg:absolute lg:left-[-3px] lg:top-0 lg:z-10 lg:h-[380px] lg:w-[570px]">
            <img
              src="/assets/home_contact.png"
              alt="Team collaboration"
              className="h-full w-full object-cover opacity-50"
            />
            {/* Dark gradient fade */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(13,13,25,0.08) 0%, rgba(13,13,25,0.42) 58%, #0d0d19 100%), linear-gradient(90deg, rgba(13,13,25,0.1) 0%, rgba(13,13,25,0.35) 100%)",
              }}
            />
          </div>

          {/* Secondary description + contacts */}
          <div className="flex flex-col gap-11 lg:absolute lg:left-0 lg:top-[408px] lg:z-20 lg:h-[191px] lg:w-[524px]">
            <p
              className="text-[14px] leading-[1.7] text-[rgba(255,255,255,0.65)] lg:text-[19px] lg:leading-[25px]"
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
        <div className="relative z-20 flex flex-col gap-[31px] lg:contents">
          {/* Primary description above form card */}
          <p
            className="text-[16px] leading-[1.7] text-[rgba(255,255,255,0.65)] lg:absolute lg:left-[602px] lg:top-0 lg:z-20 lg:h-[75px] lg:w-[553px] lg:text-[19px] lg:leading-[25px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Tell us about your idea, project, or business goals, and our team
            will help turn them into a scalable, high performing solution.
          </p>

          {/* Form card */}
          <div
            className="rounded-[12px] border border-[#3f3f49] px-7 py-8 lg:absolute lg:left-[543px] lg:top-[106px] lg:z-30 lg:h-[548px] lg:w-[566px] lg:px-10 lg:py-6"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0d0d19 0%, #221158 49%, #0d0d19 100%)",
              boxShadow: "0 4px 39px rgba(255,255,255,0.05)",
            }}
          >
            <h2
              className="mb-8 text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[var(--text-headline)] md:text-[30px] md:leading-[45px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Ready to Get Started?
            </h2>

            <form
              className="flex flex-col gap-[15px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:gap-2">
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
                className="h-[131px] w-full resize-none rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[15px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              />

              <div>
                <button
                  type="submit"
                  className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-4 text-[16px] font-medium leading-4 text-[#150544] shadow-[0_0_16px_rgba(57,115,233,0.25)] transition-colors hover:bg-white/90"
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
    className="h-16 w-full rounded-[5px] border border-white/20 bg-white/5 px-[14px] py-3 text-[15px] text-white placeholder-white/60 outline-none transition-colors focus:border-white/40"
    style={{ fontFamily: "var(--font-poppins-stack)" }}
  />
);

export default HomeContact;
