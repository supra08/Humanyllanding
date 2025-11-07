import { Button } from "./ui/button";
import { motion } from "motion/react";
import heroImage from "../assets/hero-renaissance.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroImage}
        alt="Renaissance-style artwork of human reaching toward robot"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1160px] mx-auto px-6 md:px-16 py-32 text-center pt-32 md:pt-[512px] pb-24 md:pb-[128px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[#0F1113] mb-6" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Where Intelligence Meets Intention
          </h1>
        </motion.div>
        
        <motion.h2
          className="mb-8 text-[#0F1113]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Building the next chapter of intelligent work.
        </motion.h2>
        
        <motion.p
          className="max-w-2xl mx-auto mb-10 text-[#0F1113] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          We're building browser-native agents that learn from observation, adapt to context, and act with quiet precision. 
          Systems that understand the messy reality of work, surface meaningful signal from routine operations, and move 
          with the deliberate confidence of a skilled teammate who knows when to act and when to pause.
        </motion.p>
        

      </div>
    </section>
  );
}
