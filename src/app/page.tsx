import Navbar from "@/components/shared/navbar/Navbar";
import Hero from "@/components/ui/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <Hero />
    </main>
  );
}
