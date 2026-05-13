import type { ServiceProcessStep } from "@/lib/services-data";

type Props = {
  steps: ServiceProcessStep[];
};

const ProcessCard = ({ step }: { step: ServiceProcessStep }) => (
  <div
    className="flex w-full flex-col gap-2 rounded-[10px] border border-[rgba(171,145,234,0.18)] p-5"
    style={{
      backgroundImage:
        "linear-gradient(160deg, rgba(34,17,88,0.85) 0%, rgba(20,12,55,0.95) 100%)",
      boxShadow: "0 6px 24px rgba(13,13,25,0.4)",
    }}
  >
    <h3
      className="text-[14px] font-semibold leading-[1.3] text-[var(--text-headline)]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      {step.title}
    </h3>
    <p
      className="text-[12px] leading-[1.55] text-[rgba(255,255,255,0.6)]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      {step.description}
    </p>
  </div>
);

const Connector = ({
  direction,
}: {
  direction: "right" | "down" | "left";
}) => {
  if (direction === "right") {
    return (
      <svg
        className="hidden lg:block"
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 10h54"
          stroke="rgba(171,145,234,0.4)"
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
        <path
          d="M50 5l6 5-6 5"
          stroke="rgba(171,145,234,0.55)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }
  if (direction === "down") {
    return (
      <svg
        className="hidden lg:block"
        width="20"
        height="60"
        viewBox="0 0 20 60"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 2v54"
          stroke="rgba(171,145,234,0.4)"
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
        <path
          d="M5 50l5 6 5-6"
          stroke="rgba(171,145,234,0.55)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg
      className="hidden lg:block"
      width="60"
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M58 10H4"
        stroke="rgba(171,145,234,0.4)"
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />
      <path
        d="M10 5l-6 5 6 5"
        stroke="rgba(171,145,234,0.55)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

const ServiceProcess = ({ steps }: Props) => {
  const top = steps.slice(0, 3);
  const bottom = steps.slice(3);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#08081a] py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(34,17,88,0.7) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 lg:px-0">
        <h2
          className="mb-14 text-center text-[28px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[34px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our Process
        </h2>

        {/* Mobile: simple stacked grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
          {steps.map((s) => (
            <ProcessCard key={s.title} step={s} />
          ))}
        </div>

        {/* Desktop: top row left→right, then down arrow, then bottom row right→left */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-6">
          <div className="flex w-full items-stretch justify-center gap-4">
            {top.map((s, i) => (
              <div key={s.title} className="flex items-center gap-2">
                <div className="w-[260px]">
                  <ProcessCard step={s} />
                </div>
                {i < top.length - 1 && <Connector direction="right" />}
              </div>
            ))}
          </div>

          {bottom.length > 0 && (
            <>
              <div className="flex w-full justify-end pr-[60px]">
                <Connector direction="down" />
              </div>
              <div className="flex w-full items-stretch justify-center gap-4">
                {[...bottom].reverse().map((s, i, arr) => (
                  <div key={s.title} className="flex items-center gap-2">
                    {i < arr.length - 1 && (
                      <span className="order-2">
                        <Connector direction="left" />
                      </span>
                    )}
                    <div className="order-1 w-[260px]">
                      <ProcessCard step={s} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
