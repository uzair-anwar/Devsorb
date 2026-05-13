const awards = [
  {
    title: "Clutch Leader in AI and Blockchain Development",
    body: "Recognized as a top provider of emerging tech solutions, including AI and blockchain platforms.",
  },
  {
    title: "Top Software Development Company 2025",
    body: "Recognized by leading tech directories for consistent delivery of high quality custom software solutions.",
  },
  {
    title: "Excellence in Customer Satisfaction",
    body: "Awarded for maintaining a high client retention rate and exceptional project delivery experience.",
  },
  {
    title: "Trusted by Global Clients",
    body: "Featured in international case studies for helping businesses scale with reliable engineering teams.",
  },
];

const Awards = () => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-20 lg:px-0">
      {/* Heading */}
      <div className="mb-[88px] flex flex-col items-center gap-4 text-center">
        <h2
          className="text-[36px] font-bold leading-[36px] text-[var(--text-headline)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Awards &amp; Recognitions
        </h2>
        <p
          className="max-w-[640px] text-[20px] leading-[26px] text-[rgba(255,255,255,0.65)]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          At Devsorb, recognition reflects client trust and the value we deliver
          through innovative, high-quality technology solutions.
        </p>
      </div>

      {/* Two-column: award cards + image */}
      <div className="flex flex-col items-center gap-[70px] lg:flex-row lg:items-stretch">
        {/* Award cards */}
        <div className="flex flex-1 flex-col gap-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col gap-2 rounded-[10px] border border-[rgba(98,105,174,0.45)] p-5"
              style={{
                backgroundImage:
                  "linear-gradient(125deg, rgba(34,34,34,0.42) 0%, rgba(85,85,85,0.06) 97.91%)",
                boxShadow: "0px 0px 14px 0px rgba(105,111,166,0.15)",
              }}
            >
              <p
                className="text-[18px] font-semibold leading-[1.3] text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {award.title}
              </p>
              <p
                className="text-[14px] leading-[1.5] text-[rgba(255,255,255,0.65)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {award.body}
              </p>
            </div>
          ))}
        </div>

        {/* Star trophy image */}
        <div className="flex shrink-0 items-center justify-center lg:w-[510px]">
          <div className="relative h-[500px] w-full overflow-hidden rounded-[13px]">
            <img
              src="/assets/about-awards-star.png"
              alt="Award Trophy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-[13px]"
              style={{
                backgroundImage:
                  "linear-gradient(179deg, rgba(0,0,0,0.2) 0.76%, rgba(13,13,25,0.2) 99.2%), linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
