import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";
import barongImg from "../assets/images/barong_charcoal_cropped.png";
import gazarImg from "../assets/images/metallic_gazar_charcoal_cropped.png";

// ── Data ───────────────────────────────────────────────────────────────────

const ninangColors = [
  { name: "Champagne", hex: "#D4C5A9" },
  { name: "Warm Taupe", hex: "#B5A99A" },
  { name: "Honey Beige", hex: "#DDC49A" },
  { name: "Soft Pearl", hex: "#D9D2C8" },
  { name: "Almond Beige", hex: "#D0C4B0" },
];

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

// Colors only — no fabrics/styles
const colorsToAvoid = [
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

// Reserved colors for mothers — centered pair with attribution note
const motherColors = [
  { name: "Champagne Gold", hex: "#D4AF6E", reservedFor: "Bride's Mother" },
  { name: "Silver Taupe", hex: "#D5C9C0", reservedFor: "Groom's Mother" },
];

// Featured restrictions — full-width rows with illustration
const featuredReserved = [
  {
    name: "Metallic Gazar",
    asterisk: true,
    img: gazarImg,
    imgAlt: "Metallic gazar fabric",
    note: "reserved for the bride",
  },
  {
    name: "Chinese collared barong",
    img: barongImg,
    imgAlt: "Chinese collared barong",
    note: "reserved for the groom & both fathers",
  },
];

// Secondary restrictions — plain text pills
const plainReserved = [
  { name: "Gazar" },
  { name: "Gazar façonné" },
  { name: "Duchesse satin" },
  { name: "Piña Cocoon", asterisk: true },
];

// ── Shared swatch component ────────────────────────────────────────────────

function SwatchGrid({ colors, cols = 5 }) {
  return (
    <div
      className={`grid gap-x-2 gap-y-5 md:gap-x-4 md:gap-y-6`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {colors.map((color) => (
        <div key={color.hex} className="flex flex-col items-center text-center">
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
  );
}

// ── Component ──────────────────────────────────────────────────────────────

function WhatToWear() {
  return (
    <Layout id="what-to-wear" className="bg-champagne-50">
      <FadeInSection>
        <SectionTitle>What to Wear</SectionTitle>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* 1 ── Ninang palette ─────────────────────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-6">
              For Our Ninangs
            </p>
            <SwatchGrid colors={ninangColors} cols={5} />
          </div>

          <div className="border-t border-gold-100" />

          {/* 2 ── Guest palette ──────────────────────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-6">
              Guest Colour Palette
            </p>
            <SwatchGrid colors={allowedColors} cols={5} />
          </div>

          <div className="border-t border-gold-100" />

          {/* 3 ── Colors to Avoid ────────────────────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-5">
              Colors to Avoid
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {colorsToAvoid.map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs md:text-sm text-warm-700 bg-white border border-warm-100 rounded-full px-3 py-1.5"
                >
                  <span className="text-red-400 text-[10px] leading-none flex-shrink-0">
                    ✕
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gold-100" />

          {/* 4+5 ── Reserved Colors (Mothers) + Reserved Fabrics & Styles ── */}
          <div className="bg-white border border-gold-200 rounded p-5">
            {/* Mothers palette */}
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-5">
              Reserved Colors — Mothers
            </p>
            <div className="max-w-xs mx-auto grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
              {motherColors.map((color) => (
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
                  <p className="text-[9px] md:text-[10px] text-warm-400 italic mt-1 leading-tight">
                    {color.reservedFor}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gold-100 mb-5" />

            {/* Fabrics & styles */}
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-2">
              Reserved Fabrics &amp; Styles
            </p>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">
              The following fabrics and styles are reserved for the bride,
              groom, both families, and the entourage. Please avoid wearing them
              as a guest.
            </p>
            {/* Featured: full-width rows with illustration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {" "}
              {featuredReserved.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-champagne-50 border border-gold-100 rounded px-4 py-3"
                >
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="h-15 w-auto flex-shrink-0 rounded-sm"
                  />
                  <div>
                    <span className="text-sm font-medium text-warm-800">
                      {item.name}
                      {item.asterisk && (
                        <sup className="text-gold-500 ml-0.5">*</sup>
                      )}
                    </span>
                    {item.note && (
                      <p className="text-warm-400 text-xs mt-0.5">
                        ({item.note})
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary: plain fabric text pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {plainReserved.map((item) => (
                <span
                  key={item.name}
                  className="italic text-warm-700 text-sm bg-champagne-50 border border-gold-100 rounded px-3 py-1"
                >
                  {item.name}
                  {item.asterisk && (
                    <sup className="text-gold-500 not-italic ml-0.5">*</sup>
                  )}
                </span>
              ))}
            </div>
            <p className="text-warm-400 text-xs italic">
              * Exclusively reserved for the bride & groom
            </p>
          </div>

          {/* 5 ── Additional Notes ───────────────────────── */}
          <div className="bg-white border border-gold-200 rounded p-5 space-y-3">
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-3">
              Additional Notes
            </p>
            <div className="flex items-start gap-2.5 text-sm text-warm-700">
              <span className="text-gold-400 mt-0.5 flex-shrink-0 text-[10px]">
                ◆
              </span>
              <span>
                <strong className="text-warm-800">
                  Male Principal Sponsors:
                </strong>{" "}
                long-sleeved barong required.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-warm-700">
              <span className="text-gold-400 mt-0.5 flex-shrink-0 text-[10px]">
                ◆
              </span>
              <span>
                <strong className="text-warm-800">All male guests:</strong> no
                black pants.
              </span>
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default WhatToWear;
