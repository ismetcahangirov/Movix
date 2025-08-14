import AboutSection from "@/components/AboutSection";
import NowPlayingSection from "@/components/NowPlaying";
import Top10Section from "@/components/Top10Section";
import TopRatedSection from "@/components/TopRatedSection";
import UpcomingSection from "@/components/UpcomigSection";


export default function Home() {
  return (
    <>
      <Top10Section />
      <UpcomingSection />
      <TopRatedSection />
      <NowPlayingSection />
      <AboutSection />
    </>
  );
}
