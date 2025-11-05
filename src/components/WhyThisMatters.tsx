import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const reasons = [
  {
    title: "Messy reality",
    description: "Work doesn't follow neat specifications. Systems that act in production need to handle incomplete information, shifting goals, and interfaces that change without warning."
  },
  {
    title: "Signal discovery",
    description: "Most organizations drown in data but starve for insight. Agents that observe continuous operations can surface patterns humans miss and flag risks before they compound."
  },
  {
    title: "Aligned action",
    description: "Automation without judgment creates new problems. Cognitive agents that understand context, weigh tradeoffs, and act with measured confidence extend human intention rather than replace it."
  }
];

export function WhyThisMatters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-[1160px] mx-auto">
        <motion.h2
          className="text-[#0F1113] mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Work is fragmented. Judgment is scarce.
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white border border-[#e5e5e5] rounded-3xl p-8 hover:border-[#2CACE8]/30 hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 
                className="text-[#0F1113] mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {reason.title}
              </h3>
              <p 
                className="text-[#6b7280]"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
