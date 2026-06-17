import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import StatisticsSection from "@/components/sections/StatisticsSection/StatisticsSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatisticsSection />
      <ContactSection />
    </>
  );
}
