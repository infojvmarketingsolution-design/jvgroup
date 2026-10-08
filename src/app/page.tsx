import Hero from "@/components/home/Hero";
import DynamicSolutionBuilder from "@/components/home/DynamicSolutionBuilder";
import BusinessesDirectory from "@/components/home/BusinessesDirectory";
import LeadershipPurpose from "@/components/home/LeadershipPurpose";
import SectorSynergy from "@/components/home/SectorSynergy";
import WorldwideTrendingServices from "@/components/home/WorldwideTrendingServices";
import Newsroom from "@/components/home/Newsroom";
import ContactHub from "@/components/home/ContactHub";
import SpatialAudioController from "@/components/common/SpatialAudioController";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Global Header-to-Footer Scroll Progression Tracker */}
      <ScrollProgressBar />

      {/* Primary Conglomerate Sections (Direct Native GPU Composition) */}
      <Hero />
      <DynamicSolutionBuilder />
      <BusinessesDirectory />
      <LeadershipPurpose />
      <SectorSynergy />
      <WorldwideTrendingServices />
      <Newsroom />
      <ContactHub />

      {/* Ambient Spatial Audio Controller */}
      <SpatialAudioController />
    </div>
  );
}

