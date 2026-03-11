import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import LineupSection from "@/components/LineupSection";
import TicketSection from "@/components/TicketSection";
import EventInfoSection from "@/components/EventInfoSection";
import FnBSection from "@/components/FnBSection";
import CountdownSection from "@/components/CountdownSection";
import SponsorSection from "@/components/SponsorSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import StickyTicketCTA from "@/components/StickyTicketCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <LineupSection />
      <TicketSection />
      <EventInfoSection />
      <FnBSection />
      <CountdownSection />
      <SponsorSection />
      <FAQSection />
      <SocialSection />
      <Footer />
      <StickyTicketCTA />
    </main>
  );
}
