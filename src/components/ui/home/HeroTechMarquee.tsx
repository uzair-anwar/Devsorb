"use client";

const FIGMA_TECH_STRIP = "/assets/figma-hero-tech-strip.svg";

const TECH_LOGOS = [
  { src: "/assets/hero-tech-logos/logo-01.png", w: 75, h: 30 },
  { src: "/assets/hero-tech-logos/logo-02.png", w: 56, h: 30 },
  { src: "/assets/hero-tech-logos/logo-03.png", w: 99, h: 30 },
  { src: "/assets/hero-tech-logos/logo-04.png", w: 109, h: 30 },
  { src: "/assets/hero-tech-logos/logo-05.png", w: 83, h: 30 },
  { src: "/assets/hero-tech-logos/logo-06.png", w: 76, h: 30 },
  { src: "/assets/hero-tech-logos/logo-07.png", w: 103, h: 30 },
  { src: "/assets/hero-tech-logos/logo-08.png", w: 78, h: 30 },
  { src: "/assets/hero-tech-logos/logo-09.png", w: 84, h: 26 },
  { src: "/assets/hero-tech-logos/logo-10.png", w: 63, h: 30 },
  { src: "/assets/hero-tech-logos/logo-11.png", w: 40, h: 40 },
];

const HeroTechMarquee = () => {
  return (
    <>
      <div className="pointer-events-none relative h-full w-full overflow-hidden">
        <img
          src={FIGMA_TECH_STRIP}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-logo-marquee absolute inset-y-0 left-0 flex w-max min-w-full items-center gap-[72px] lg:gap-[102px]">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((logo, idx) => (
            <span
              key={`${logo.src}-${idx}`}
              aria-hidden="true"
              className="block shrink-0 bg-white opacity-95"
              style={{
                width: `${logo.w}px`,
                height: `${logo.h}px`,
                WebkitMaskImage: `url("${logo.src}")`,
                maskImage: `url("${logo.src}")`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .hero-logo-marquee {
          animation: hero-logo-scroll 30s linear infinite;
        }

        @keyframes hero-logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default HeroTechMarquee;
