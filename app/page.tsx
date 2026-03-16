import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GloryCupSection from "@/components/GloryCupSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import CountdownSection from "@/components/CountdownSection";
import SponsorSection from "@/components/SponsorSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <CountdownSection />
      <SponsorSection />
      <FAQSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
