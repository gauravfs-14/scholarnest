import CTA from "@/components/cta-card";
import FAQ from "@/components/faq-section";
import FeaturesSection from "@/components/feature-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 min-h-screen mt-30">
        <Navbar />
        <div className="mx-auto max-w-7xl container py-8">
          <HeroSection />
          <div className="mb-20" />
          <FeaturesSection />

          <div className="mb-20" />
          <FAQ />
          <div className="mb-20" />
          <CTA />
          <div className="mb-20" />
        </div>
      </main>
      <Footer />
    </>
  );
}
