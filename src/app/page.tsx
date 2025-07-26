import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PuppyPreview } from "@/components/sections/PuppyPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { KnowYourPup } from "@/components/sections/KnowYourPup"; // <-- Import the new section
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PuppyPreview />
      <Testimonials />
      <KnowYourPup /> {/* <-- Add it here */}
      <CallToAction />
    </>
  );
}