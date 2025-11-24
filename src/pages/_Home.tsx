import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { WhatWeDo } from "../components/WhatWeDo";
import { Experiments } from "../components/Experiments";
import { Philosophy } from "../components/Philosophy";
import { WhyThisMatters } from "../components/WhyThisMatters";
import { CallToAction } from "../components/CallToAction";
import { TalkToUs } from "../components/TalkToUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Experiments />
      <Philosophy />
      <WhyThisMatters />
      <TalkToUs />
      <CallToAction />
    </div>
  );
}

