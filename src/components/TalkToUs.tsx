import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function TalkToUs() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return (
    <section
      id="talk-to-us"
      className="bg-white px-6 md:px-16 py-20 md:py-28"
    >
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-[#0F1113] text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Talk to us
          </p>
          <p
            className="text-[#6b7280] text-base md:text-lg"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Pick a time that works for you and we&apos;ll walk you through how
            we build with intention.
          </p>
        </div>

        <div className="rounded-[32px] border border-[#e5e5e5] shadow-sm overflow-hidden min-h-[640px]">
          <Cal
            namespace="30min"
            calLink="supratikhumanyl/30min"
            style={{ width: "100%", height: "700px", overflow: "auto" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}


