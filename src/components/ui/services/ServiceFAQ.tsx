"use client";

import { useState } from "react";
import type { ServiceFAQItem } from "@/lib/services-data";

type Props = {
  faqs: ServiceFAQItem[];
};

const ServiceFAQ = ({ faqs }: Props) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-[760px] px-4 py-16 lg:px-0 lg:py-20">
      <h2
        className="mb-10 text-center text-[28px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[34px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Frequently Asked Question
      </h2>

      <div className="flex flex-col">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.question}
              className="border-b border-[rgba(255,255,255,0.08)] py-5"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span
                  className="text-[15px] font-semibold leading-[1.4] text-[var(--text-headline)] md:text-[16px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center text-[20px] leading-none text-[rgba(255,255,255,0.55)]"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p
                  className="mt-3 text-[13px] leading-[1.7] text-[rgba(255,255,255,0.6)] md:text-[14px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceFAQ;
