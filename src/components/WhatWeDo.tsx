import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, RefreshCw, Radar } from "lucide-react";

const features = [
  {
    title: "Autonomous Reasoning",
    description: "Inference that extracts intent from messy inputs and decides next steps with controlled risk.",
    icon: Brain
  },
  {
    title: "Adaptive Execution",
    description: "Agents that navigate dynamic interfaces, recover from drift, and keep moving as the world changes.",
    icon: RefreshCw
  },
  {
    title: "Cognitive Signaling",
    description: "Observability that surfaces weak signals, flags anomalies, and turns attention into leverage.",
    icon: Radar
  }
];

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.section 
      ref={ref} 
      className="py-24 px-6"
      style={{ opacity, scale }}
    >
      <div className="max-w-[1160px] mx-auto">
        <motion.h2
          className="mb-6 text-[#0F1113]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          We engineer cognitive agents
        </motion.h2>
        
        <motion.p
          className="mb-16 max-w-3xl text-[#4a4a4a]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Systems that learn workflows like teammates, act through real environments, and surface signal from routine operations.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const cardRef = cardRefs[index];
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                ref={cardRef}
                className="group relative bg-white border border-[#e5e5e5] rounded-3xl p-8 hover:border-[#2CACE8]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#2CACE8]/0 via-[#2CACE8]/0 to-[#2CACE8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(44, 172, 232, 0.05) 0%, rgba(44, 172, 232, 0) 70%)"
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2CACE8]/10 group-hover:bg-[#2CACE8]/20 transition-colors duration-500"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Icon className="w-6 h-6 text-[#2CACE8] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                
                <h3 
                  className="mb-4 text-[#0F1113] relative z-10"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[#4a4a4a] relative z-10"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {feature.description}
                </p>
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2CACE8]/0 to-[#2CACE8]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
