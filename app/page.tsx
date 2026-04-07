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
import { fetchActivities } from "@/lib/sheets";

export default async function Home() {
  const activities = await fetchActivities();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection initialActivities={activities} />
      <CountdownSection />
      <SponsorSection />
      <FAQSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
