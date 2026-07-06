import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

const allowedColors = [
  { name: "Warm cream", hex: "#EDE0CC" },
  { name: "Champagne", hex: "#D4C5A9" },
  { name: "Sand beige", hex: "#C9B99A" },
  { name: "Caramel gold", hex: "#C4A882" },
  { name: "Silver mist", hex: "#B8B0A4" },
  { name: "Warm tan", hex: "#A89880" },
  { name: "Dusty sage", hex: "#9CAF88" },
  { name: "Silver sage", hex: "#B2BCAA" },
  { name: "Earth brown", hex: "#8E786A" },
  { name: "Deep mocha", hex: "#7A6B5A" },
];

const doNotWear = [
  "Pure white",
  "Ivory / cream white",
  "Stark black",
  "Bright red",
  "Hot pink / neon",
  "Bright orange",
  "Bright yellow",
  "Electric blue",
  "Bright purple",
];

const reservedFabrics = [
  "Metallic Gazar *",
  "Gazar",
  "Gazar façonné",
  "Duchesse satin",
];

function WhatToWear() {
  return (
    <Layout id="what-to-wear" className="bg-champagne-50">
      <FadeInSection>
        <SectionTitle>What to Wear</SectionTitle>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* ── Allowed colour palette ───────────────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-6">
              Guest Colour Palette
            </p>
            <div className="grid grid-cols-5 gap-x-2 gap-y-5 md:gap-x-4 md:gap-y-6">
              {allowedColors.map((color) => (
                <div
                  key={color.hex}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-10 h-10 md:w-13 md:h-13 rounded-full shadow-sm border border-black/8 flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-[9px] md:text-[11px] text-warm-700 mt-2 leading-tight font-medium px-0.5">
                    {color.name}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-warm-400 font-mono tracking-tight mt-0.5">
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gold-100" />

          {/* ── Do not wear ──────────────────────────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-5">
              Please Do Not Wear
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {doNotWear.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs md:text-sm text-warm-700 bg-white border border-warm-100 rounded-full px-3 py-1.5 leading-none"
                >
                  <span className="text-red-400 text-[10px] leading-none flex-shrink-0">
                    ✕
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gold-100" />

          {/* ── Reserved fabrics ─────────────────────────── */}
          <div className="bg-white border border-gold-200 rounded p-5">
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-2">
              Reserved Fabrics
            </p>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">
              The following fabrics are reserved exclusively for the bride, both
              mothers, entourage, and sponsors. Please avoid wearing them as a
              guest.
            </p>
            <div className="flex flex-wrap gap-2">
              {reservedFabrics.map((fabric) => (
                <span
                  key={fabric}
                  className="italic text-warm-700 text-sm bg-champagne-50 border border-gold-100 rounded px-3 py-1"
                >
                  {fabric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default WhatToWear;
