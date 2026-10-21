/**
 * Eyebrow + heading pair used by every home section (Figma 1427:8692 and
 * siblings): a 48px gradient rule with a blurred #4f60fa dot on its outer end,
 * the label in Inter Medium 16, then the section title centred below.
 */
const Rule = ({ flip = false }: { flip?: boolean }) => (
  <span aria-hidden="true" className="relative block h-[5px] w-[50px] shrink-0">
    <span
      className="absolute top-[2px] left-0 block h-px w-12"
      style={{
        backgroundImage: `linear-gradient(${flip ? 270 : 90}deg, rgba(0,3,28,0) 6.069%, #f4f7ff 51.261%, rgba(0,3,28,0) 91.211%)`,
      }}
    />
    <span
      className={`absolute top-[1px] block size-[5px] rounded-[5px] bg-[#4f60fa] blur-[1px] ${flip ? "left-[-6px]" : "left-[48px]"}`}
    />
  </span>
);

const SectionHeading = ({
  label,
  title,
  className = "",
}: {
  label: string;
  title: string;
  className?: string;
}) => (
  <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
    <div className="flex items-center">
      <Rule />
      <span
        className="px-1 text-[16px] leading-4 font-medium text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {label}
      </span>
      <Rule flip />
    </div>
    <h2
      className="text-[28px] leading-[1.15] font-bold text-[var(--text-headline)] md:text-[32px] lg:text-[36px] lg:leading-[36px]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {title}
    </h2>
  </div>
);

export default SectionHeading;
