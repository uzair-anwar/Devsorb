"use client";

import Button from "@/components/shared/button/button";
import HeroTechMarquee from "@/components/ui/home/HeroTechMarquee";

const FIGMA_BG_MASK = "/assets/figma-hero-bg-mask.svg";
const FIGMA_BG_BOXES = "/assets/figma-hero-bg-boxes.svg";
const FIGMA_HAND_IMAGE = "/assets/figma-hero-hand.png";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pb-0">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[258px] -left-[169px] z-0 h-[795px] w-[1090px] rounded-full bg-[var(--bg-surface)] opacity-100 blur-[200px]" />
        <div
          className="absolute top-[48px] left-1/2 z-[2] hidden h-[648px] w-[1320px] -translate-x-1/2 lg:block"
          style={{
            WebkitMaskImage: `url("${FIGMA_BG_MASK}")`,
            maskImage: `url("${FIGMA_BG_MASK}")`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "112px 60px",
            maskPosition: "112px 60px",
            WebkitMaskSize: "1172px 592px",
            maskSize: "1172px 592px",
          }}
        >
          <img
            src={FIGMA_BG_BOXES}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 flex w-full max-w-[1440px] flex-col items-center px-4 md:px-8">
        <div className="grid w-full grid-cols-1 items-center">
          <div className="mt-12 flex flex-col items-center text-center md:mt-46">
            <h1 className="mb-7 text-[52px] leading-[1.08] font-black tracking-[-0.035em] text-[var(--text-headline)] drop-shadow-2xl md:text-[81px] md:leading-[90px]">
              Build. Scale. Automate
              <br />
              Your Business.
            </h1>

            <p className="mb-8 max-w-[740px] text-[20px] leading-[1.32] font-medium text-[#cac9d1] md:text-[24px] md:leading-[29px]">
              Custom software, AI, and automation delivered faster, smarter,
              <br className="hidden md:block" /> and your way.
            </p>

            <div className="mb-24 flex flex-col items-center gap-8 sm:flex-row">
              <Button variant="primary" size="sm">
                See Our Work
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute top-[250px] -right-[164px] z-20 hidden h-[454px] w-[710px] items-center justify-center select-none xl:flex">
            <div className="relative h-[251px] w-[664px] rotate-[-21deg] overflow-hidden">
              <img
                src={FIGMA_HAND_IMAGE}
                alt="Robot Hand Right"
                className="absolute -top-[109.92%] -left-[19.05%] h-[209.92%] w-[119.05%] max-w-none"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute -top-[60px] -left-[160px] z-20 hidden h-[454px] w-[710px] items-center justify-center select-none xl:flex">
            <div className="relative h-[251px] w-[664px] rotate-[155deg] overflow-hidden">
              <img
                src={FIGMA_HAND_IMAGE}
                alt="Robot Hand Left"
                className="absolute -top-[109.92%] -left-[19.05%] h-[209.92%] w-[119.05%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      <HeroTechMarquee />
    </section>
  );
};

export default Hero;
