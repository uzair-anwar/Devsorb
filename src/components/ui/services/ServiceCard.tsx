import Link from "next/link";

/**
 * Figma 1427:8824 — 272px card, 1px #3b449a stroke, 14px radius, and a
 * 133.7deg #221158 wash that goes from transparent to solid at the corner.
 */
export const CARD_GRADIENT =
  "linear-gradient(133.72deg, rgba(34,17,88,0) 23.346%, rgba(34,17,88,0.514) 79.468%, rgb(34,17,88) 99.979%)";

const ServiceCard = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) => (
  <Link
    href={href}
    className="group flex min-h-[287px] flex-col justify-between gap-[65px] rounded-[14px] border border-[#3b449a] p-6 transition-colors duration-300 hover:border-[var(--accent-primary)]"
    style={{ backgroundImage: CARD_GRADIENT }}
  >
    <div className="flex items-center justify-between">
      <span className="flex h-[61.121px] w-[60.175px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(255,255,255,0.07)] bg-[#291b5a] p-5">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-[37px] w-[37px] object-contain"
        />
      </span>
      <img
        src="/assets/services/card-arrow.svg"
        alt=""
        aria-hidden="true"
        className="h-[36.104px] w-[36.104px] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>

    <div className="flex flex-col gap-[17px]">
      <p
        className="text-[18px] leading-[26px] font-medium text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </p>
      <p
        className="text-[15px] leading-[22px] font-normal text-[rgba(255,255,255,0.65)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {description}
      </p>
    </div>
  </Link>
);

export default ServiceCard;
