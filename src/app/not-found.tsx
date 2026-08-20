import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--bg-main)] text-white">
      <Navbar />
      <div className="relative flex flex-1 flex-col items-center justify-center gap-6 px-4 py-[180px] text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[150px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 50%, transparent 70%)",
          }}
        />
        <p
          className="relative z-10 text-[90px] font-bold leading-none text-[var(--text-headline)] lg:text-[120px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </p>
        <h1
          className="relative z-10 text-[24px] font-bold leading-[1.2] text-[var(--text-headline)] lg:text-[32px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          This page doesn&apos;t exist
        </h1>
        <p
          className="relative z-10 max-w-[440px] text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)] lg:text-[17px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          The page you&apos;re looking for may have been moved or removed.
          Head back home or explore our services.
        </p>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-5 text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.42)] px-5 text-[16px] font-medium leading-none text-white transition-colors hover:border-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Services
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
