import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";
import barongImg from "../assets/images/barong-removebg.png";
import gazarImg from "../assets/images/metallic_gazar-removebg.png";

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

const ninangColors = [
  { name: "Champagne Gold", hex: "#D4AF6E" },
  { name: "Silver / Pewter", hex: "#C2B9AA" },
  { name: "Champagne", hex: "#D4C5A9" },
  { name: "Warm Taupe", hex: "#B5A99A" },
];

// Items with img: a src string → renders as <img>; others get the plain ✕
const doNotWear = [
  { label: "Pure white" },
  { label: "Ivory / cream white" },
  { label: "Stark black" },
  { label: "Bright red" },
  { label: "Hot pink / neon" },
  { label: "Bright orange" },
  { label: "Bright yellow" },
  { label: "Electric blue" },
  { label: "Bright purple" },
  {
    label: "Metallic Gazar",
    note: "reserved for the bride",
    img: gazarImg,
    imgAlt: "Metallic gazar fabric — do not wear",
  },
  {
    label: "Chinese collared barong",
    note: "reserved for the groom & both fathers",
    img: barongImg,
    imgAlt: "Chinese collared barong — do not wear",
  },
];

// asterisk: true → rendered with * and covered by the footnote
const reservedFabrics = [
  { name: "Metallic Gazar", asterisk: true },
  { name: "Piña Cocoon", asterisk: true },
  { name: "Gazar" },
  { name: "Gazar façonné" },
  { name: "Duchesse satin" },
];

function WhatToWear() {
  return (
    <Layout id="what-to-wear" className="bg-champagne-50">
      <FadeInSection>
        <SectionTitle>What to Wear</SectionTitle>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* ── Female Principal Sponsors palette ────────── */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold text-center mb-6">
              For Our Ninangs
            </p>
            <div className="grid grid-cols-4 gap-x-2 gap-y-5 md:gap-x-4 md:gap-y-6">
              {ninangColors.map((color) => (
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
              {doNotWear.map((item) =>
                item.img ? (
                  /* Image-illustrated pill — slightly warm bg to match illustration bg */
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-xs md:text-sm text-warm-700 bg-white border border-warm-100 rounded-full px-3 py-1.5"
                  >
                    <img
                      src={item.img}
                      alt={item.imgAlt}
                      className="h-10 w-auto flex-shrink-0 rounded-sm"
                    />
                    <span>
                      {item.label}
                      {item.note && (
                        <span className="text-warm-400 text-[10px] ml-1 normal-case">
                          ({item.note})
                        </span>
                      )}
                    </span>
                  </span>
                ) : (
                  /* Standard text pill */
                  <span
                    key={item.label}
                    className="flex items-center gap-1.5 text-xs md:text-sm text-warm-700 bg-white border border-warm-100 rounded-full px-3 py-1.5"
                  >
                    <span className="text-red-400 text-[10px] leading-none flex-shrink-0">
                      ✕
                    </span>
                    <span>{item.label}</span>
                  </span>
                ),
              )}
            </div>
          </div>

          {/* ── Dress code notes callout ─────────────────── */}
          <div className="bg-white border border-gold-200 rounded p-5 space-y-3">
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-1">
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
            <div className="flex flex-wrap gap-2 mb-3">
              {reservedFabrics.map((fabric) => (
                <span
                  key={fabric.name}
                  className="italic text-warm-700 text-sm bg-champagne-50 border border-gold-100 rounded px-3 py-1"
                >
                  {fabric.name}
                  {fabric.asterisk && (
                    <sup className="text-gold-500 not-italic ml-0.5">*</sup>
                  )}
                </span>
              ))}
            </div>
            <p className="text-warm-400 text-xs italic">
              *Exclusively reserved for the bride&apos;s gown
            </p>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default WhatToWear;
