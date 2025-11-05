import { Button } from "./ui/button";
import svgPaths from "../imports/svg-187aig97cg";

export function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[700px] px-6">
      <div className="flex items-center justify-between px-6 py-4 rounded-[1000px] backdrop-blur-2xl bg-white/10 border border-white/10 bg-[rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <g>
                <g clipPath="url(#clip0_1_102)">
                  <ellipse cx="17.82" cy="30.06" fill="#2CC5E8" rx="30.78" ry="45.18" />
                  <g filter="url(#filter0_f_1_102)">
                    <circle cx="23.4" cy="28.44" fill="#F6A715" r="16.2" />
                  </g>
                  <g filter="url(#filter1_f_1_102)">
                    <circle cx="10.08" cy="25.56" fill="#0F1113" r="16.2" />
                  </g>
                  <g filter="url(#filter2_f_1_102)">
                    <circle cx="5.39998" cy="15.12" fill="#318B9D" r="16.2" />
                  </g>
                  <path d={svgPaths.p12763d80} fill="white" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58.104" id="filter0_f_1_102" width="58.104" x="-5.65202" y="-0.611994">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_102" stdDeviation="6.426" />
                </filter>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.6" id="filter1_f_1_102" width="39.6" x="-9.72003" y="5.76">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_102" stdDeviation="1.8" />
                </filter>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.4" id="filter2_f_1_102" width="68.4" x="-28.8" y="-19.08">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_102" stdDeviation="9" />
                </filter>
                <clipPath id="clip0_1_102">
                  <rect fill="white" height="36" rx="5.76" width="36" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[#0F1113] tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '1.25rem', fontWeight: 400 }}>
            Humanyl
          </h1>
        </div>
        
        <button className="bg-[#0f1113] hover:bg-[#0f1113]/90 rounded-[28px] px-[24px] py-[12px] transition-all duration-300">
          <p className="font-['Instrument_Sans:Medium',sans-serif] text-white text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontSize: '16px', fontWeight: 500 }}>
            Talk To Us
          </p>
        </button>
      </div>
    </nav>
  );
}
