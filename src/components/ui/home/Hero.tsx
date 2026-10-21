"use client";

import Button from "@/components/shared/button/button";
import HeroTechMarquee from "@/components/ui/home/HeroTechMarquee";

const FIGMA_BG_MASK = "/assets/figma-hero-bg-mask.svg";
const FIGMA_BG_BOXES = "/assets/figma-hero-bg-boxes.svg";
const FIGMA_HAND_IMAGE = "/assets/figma-hero-hand.png";

const Hero = () => {
  return (
    <section className="relative isolate h-[320px] overflow-hidden sm:h-[442px] lg:h-[745px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Figma: #221158 ellipse under a gaussian blur of stdDeviation 173.3 */}
        <div className="absolute -top-[77px] -left-[50px] z-0 h-[237px] w-[325px] rounded-full bg-[#221158] opacity-100 blur-[52px] sm:-top-[133px] sm:-left-[87px] sm:h-[411px] sm:w-[563px] sm:blur-[89px] lg:-top-[258px] lg:-left-[169px] lg:h-[795px] lg:w-[1090px] lg:blur-[173px]" />
        <div
          className="absolute top-[32px] left-1/2 z-[2] h-[177px] w-[350px] -translate-x-1/2 sm:top-[33px] sm:h-[264px] sm:w-[523px] lg:top-[139px] lg:h-[524px] lg:w-[1037px]"
          style={{
            WebkitMaskImage: `url("${FIGMA_BG_MASK}")`,
            maskImage: `url("${FIGMA_BG_MASK}")`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <img
            src={FIGMA_BG_BOXES}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto h-full w-full max-w-[1440px] px-4 md:px-8">
        <div className="absolute top-[70px] left-1/2 z-20 flex w-[267px] -translate-x-1/2 flex-col items-center text-center sm:top-[132px] sm:w-[397px] lg:top-[255px] lg:w-[864px]">
          <h1 className="mb-0 text-[25px] leading-[32px] font-bold text-[var(--text-headline)] drop-shadow-2xl sm:text-[44px] sm:leading-[52px] lg:text-[81px] lg:leading-[90px]">
            <span className="block whitespace-nowrap">
              Build. Scale. Automate.
            </span>
            <span className="block whitespace-nowrap">Your Business</span>
          </h1>

          <p className="mt-0 mb-5 max-w-[265px] text-[14px] leading-[20px] font-normal text-[rgba(255,255,255,0.65)] sm:mt-2 sm:max-w-[420px] sm:text-[16px] sm:leading-[22px] lg:mt-2 lg:mb-8 lg:w-[758px] lg:max-w-none lg:text-[24px] lg:leading-[32px]" style={{ fontFamily: "var(--font-poppins-stack)" }}>
            <span className="sm:hidden">
              Custom software, AI, and automation
              <br /> delivered faster, smarter, and your
              <br /> way.
            </span>
            <span className="hidden sm:inline">
              Custom software, AI, and automation delivered faster, smarter,
              <br /> and your way.
            </span>
          </p>

          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Button
              variant="primary"
              size="sm"
              href="/success-stories"
              className="h-[32px] px-4 text-[12px] leading-[12px] lg:h-[40px] lg:text-[16px] lg:leading-[16px]"
            >
              See Our Work
            </Button>
          </div>
        </div>

        {/* Figma 30:673 — a 664x251 window rotated -19.06deg, centred in a
            709.56x454.07 box. The rotation is what keeps the hand clear of the
            tech strip; an unrotated full-size image overruns it. */}
        <div className="pointer-events-none absolute top-[200px] right-[-39px] z-10 flex h-[63px] w-[166px] items-center justify-center select-none sm:top-[318px] sm:right-[-76px] sm:h-[108px] sm:w-[287px] lg:top-[340px] lg:left-[901px] lg:right-auto lg:h-[454.074px] lg:w-[709.564px]">
          <div className="relative h-[63px] w-[166px] rotate-[-21deg] overflow-hidden sm:h-[108px] sm:w-[287px] lg:h-[251px] lg:w-[664px] lg:rotate-[-19.06deg]">
            <img
              src={FIGMA_HAND_IMAGE}
              alt="Robot Hand Right"
              className="absolute -top-[109.92%] -left-[19.05%] h-[209.92%] w-[119.05%] max-w-none"
            />
          </div>
        </div>

        {/* Figma 137:3166 — same window, rotated 160.94deg at left -169, top 0 */}
        <div className="pointer-events-none absolute top-[74px] left-[142px] z-10 flex h-[63px] w-[166px] items-center justify-center select-none sm:top-[134px] sm:left-[246px] sm:h-[109px] sm:w-[287px] lg:top-0 lg:left-[-169px] lg:h-[454.074px] lg:w-[709.564px]">
          <div className="relative h-[63px] w-[166px] rotate-[155deg] overflow-hidden sm:h-[109px] sm:w-[287px] lg:h-[251px] lg:w-[664px] lg:rotate-[160.94deg]">
            <img
              src={FIGMA_HAND_IMAGE}
              alt="Robot Hand Left"
              className="absolute -top-[109.92%] -left-[19.05%] h-[209.92%] w-[119.05%] max-w-none"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-[37px] overflow-hidden lg:h-[40px]">
        <HeroTechMarquee />
      </div>
    </section>
  );
};

export default Hero;
