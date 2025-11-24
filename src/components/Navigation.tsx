import svgPaths from "../imports/svg-187aig97cg";

export function Navigation() {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] md:w-full md:max-w-[700px] px-4 md:px-6">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-[1000px] backdrop-blur-2xl bg-white/10 border border-white/10 bg-[rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden">
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
          </a>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <a href="/">
            <h1 className="text-[#0F1113] tracking-tight text-lg md:text-xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}>
              Humanyl
            </h1>
          </a>
          <a
            href="/blog"
            className="text-[#0F1113] hover:text-[#2CACE8] transition-colors duration-300 text-sm md:text-base"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 400 }}
          >
            Blog
          </a>
        </div>
        
        <a
          href="#talk-to-us"
          className="bg-[#0f1113] hover:bg-[#0f1113]/90 rounded-[28px] px-4 md:px-6 py-2 md:py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f1113] cursor-pointer"
        >
          <p className="font-['Instrument_Sans:Medium',sans-serif] text-white text-center text-nowrap text-sm md:text-base" style={{ fontVariationSettings: "'wdth' 100", fontWeight: 500 }}>
            Talk To Us
          </p>
        </a>
      </div>
    </nav>
  );
}
