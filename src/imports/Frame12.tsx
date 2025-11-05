function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] ml-[37px] mt-0 relative text-[16px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Talk To Us
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#0f1113] relative rounded-[28px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[12px] relative size-full">
          <Group />
        </div>
      </div>
    </div>
  );
}