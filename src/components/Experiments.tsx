import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const experiments = [
  {
    title: "Observation to policy",
    description: "From screen recordings to executable policies that generalize across vendors."
  },
  {
    title: "Browser-native action",
    description: "Human-like interaction models that survive latency and DOM mutation."
  },
  {
    title: "Insight extraction",
    description: "Entity and relationship graph building from operational exhaust."
  },
  {
    title: "Cost and latency tuning",
    description: "Dynamic routing that balances accuracy and spend."
  },
  {
    title: "Memory and trust",
    description: "Long-horizon memory with audit trails and rollback."
  }
];

export function Experiments() {
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
          Work in progress
        </motion.h2>
        
        <div className="space-y-0">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              className="py-8 border-t border-[#e5e5e5] first:border-t-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <h3 
                  className="text-[#0F1113] md:w-1/3"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {experiment.title}
                </h3>
                <p 
                  className="text-[#6b7280] md:w-2/3"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {experiment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
