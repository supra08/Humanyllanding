import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Experiments } from "./components/Experiments";
import { Philosophy } from "./components/Philosophy";
import { WhyThisMatters } from "./components/WhyThisMatters";
import { CallToAction } from "./components/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Experiments />
      <Philosophy />
      <WhyThisMatters />
      <CallToAction />
    </div>
  );
}
