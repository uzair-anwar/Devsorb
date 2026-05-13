type Props = {
  capabilities: string[];
  image: string;
};

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M3.75 9.25l3.5 3.5 7-7"
      stroke="var(--accent-primary)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceCapabilities = ({ capabilities, image }: Props) => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:px-0 lg:py-20">
      <h2
        className="mb-10 text-[28px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[34px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Our Capabilities
      </h2>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
        <div className="relative overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.07)]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            style={{ aspectRatio: "4 / 3" }}
          />
        </div>

        <div
          className="rounded-[14px] border border-[rgba(255,255,255,0.07)] p-6 md:p-8"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(34,17,88,0.45) 0%, rgba(13,13,25,0.85) 100%)",
          }}
        >
          <ul className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span className="mt-0.5">
                  <CheckIcon />
                </span>
                <span
                  className="text-[14px] leading-[1.5] text-[rgba(255,255,255,0.85)] md:text-[15px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
