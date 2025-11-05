import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const principles = [
  {
    title: "Observation over specification",
    description: "Learn from how work actually happens."
  },
  {
    title: "Interfaces are the unit",
    description: "Act where humans work, which is the browser."
  },
  {
    title: "Control then scale",
    description: "Put observability and guardrails before speed."
  }
];

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-[1160px] mx-auto">
        <motion.h2
          className="text-[#0F1113] mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Between thought and action
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="bg-white border border-[#e5e5e5] rounded-3xl p-8 hover:border-[#2CACE8]/30 hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 
                className="text-[#0F1113] mb-3"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {principle.title}
              </h3>
              <p 
                className="text-[#6b7280]"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
