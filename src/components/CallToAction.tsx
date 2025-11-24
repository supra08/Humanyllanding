import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-16 bg-[#fafafa]">
      <div className="max-w-[1160px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-[#0F1113] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Build with us
          </motion.h2>
          
          <motion.p
            className="text-[#6b7280] mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            We're collaborating with teams that value robustness over hype, impact over scale, 
            and systems that work in production rather than demos that shine in slides. 
            If you're building something real and need agents that think before they act, let's talk.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="/request-access">
              <Button 
                size="lg"
                className="bg-[#2CACE8] hover:bg-[#2CACE8]/90 text-white rounded-full px-8 transition-all duration-300 w-full sm:w-auto"
              >
                Request access
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              className="border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#0F1113] rounded-full px-8 transition-all duration-300 w-full sm:w-auto"
            >
              Read our approach
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <motion.div
        className="max-w-[1160px] mx-auto mt-20 md:mt-32 pt-8 md:pt-12 border-t border-[#e5e5e5] text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p 
          className="text-[#6b7280] text-sm md:text-base"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          © 2025 Humanyl. Building intelligence with intention.
        </p>
      </motion.div>
    </section>
  );
}
