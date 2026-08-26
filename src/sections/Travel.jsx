import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import undergroundRiverImg from "../assets/images/PalawanUndergroundRiver.jpg";
import hondaBayImg from "../assets/images/HondaBayPalawan.jpg";
import firefliesImg from "../assets/images/Fireflies.jpg";
import sabangBeachImg from "../assets/images/SabangBeach.jpg";
import localMarketsImg from "../assets/images/LocalMarkets.jpg";
import ugongRockImg from "../assets/images/UgongRock.jpg";

// Circular thumbnails crop toward each photo's focal point via objectPosition —
// tune per-image if a crop still looks off once rendered.
const attractions = [
  {
    name: "Underground River",
    caption: "UNESCO World Heritage Site",
    img: undergroundRiverImg,
    objectPosition: "50% 60%",
  },
  {
    name: "Honda Bay Island Hopping",
    caption: "Hop between white-sand islets",
    img: hondaBayImg,
    objectPosition: "50% 65%",
  },
  {
    name: "City Tour & Firefly Watching",
    caption: "A magical night on the river",
    img: firefliesImg,
    objectPosition: "35% 40%",
  },
  {
    name: "Sabang Beach",
    caption: "Golden sands, calm waters",
    img: sabangBeachImg,
    objectPosition: "50% 75%",
  },
  {
    name: "Local Restaurants & Markets",
    caption: "Fresh local flavors await",
    img: localMarketsImg,
    objectPosition: "50% 40%",
  },
  {
    name: "Ugong Rock Adventure",
    caption: "Spelunking & zipline thrills",
    img: ugongRockImg,
    objectPosition: "35% 50%",
  },
];

const EASE = [0.25, 0.1, 0.25, 1];

function Lightbox({ attraction, onClose }) {
  useEffect(() => {
    if (!attraction) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [attraction, onClose]);

  return createPortal(
    <AnimatePresence>
      {attraction && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={onClose}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-2xl leading-none text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)] hover:opacity-75 transition-opacity duration-200"
            >
              ✕
            </button>
            <img
              src={attraction.img}
              alt={attraction.name}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded shadow-xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white border border-gold-100 rounded p-6 shadow-sm">
      <h3 className="font-serif text-2xl font-light text-warm-800 mb-4 pb-3 border-b border-gold-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Travel() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  return (
    <Layout id="travel" className="bg-champagne-100">
      <FadeInSection>
        <SectionTitle>Travel &amp; Accommodations</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Venue */}
          <Card title="Venue">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-warm-700 text-sm leading-relaxed mb-1">
                  <span className="text-xs tracking-widest uppercase text-gold-500 font-semibold">
                    Ceremony
                  </span>
                  <br />
                  <strong className="text-warm-800">
                    Divine Mercy Shrine and Parish
                  </strong>
                  <br />
                  Barangay Sicsican Puerto Princesa City, Palawan 5300
                  <br />
                  <strong className="text-warm-800">2:00 PM</strong>
                </p>
                <a
                  href="https://maps.google.com/?q=Divine+Mercy+Shrine+and+Parish+Puerto+Princesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-5 py-2 text-sm border border-gold-400 text-gold-600 rounded hover:bg-gold-400 hover:text-white transition-colors duration-200"
                >
                  Church on Google Maps
                </a>
              </div>

              <div>
                <p className="text-warm-700 text-sm leading-relaxed mb-1">
                  <span className="text-xs tracking-widest uppercase text-gold-500 font-semibold">
                    Reception
                  </span>
                  <br />
                  <strong className="text-warm-800">Citystate Asturias Hotel Palawan</strong>
                  <br />
                  South National Highway, Puerto Princesa City, 5300 Palawan
                </p>
                <a
                  href="https://maps.google.com/?q=Citystate+Asturias+Hotel+Puerto+Princesa+Palawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-5 py-2 text-sm border border-gold-400 text-gold-600 rounded hover:bg-gold-400 hover:text-white transition-colors duration-200"
                >
                  Reception on Google Maps
                </a>
              </div>
            </div>
          </Card>

          {/* Getting There */}
          <Card title="Getting There">
            <p className="text-warm-700 text-sm leading-relaxed mb-5">
              <strong className="text-warm-800">By Air:</strong> Fly to Puerto
              Princesa International Airport (PPS). Direct flights available from
              Manila, Clark, and other major cities.
            </p>
            <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-3">
              From the Airport
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-champagne-50 border border-gold-100 rounded p-4">
                <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-1.5">
                  Ceremony
                </p>
                <p className="font-serif text-sm text-warm-800 font-light leading-snug mb-2">
                  Divine Mercy Shrine &amp; Parish
                </p>
                <p className="text-warm-600 text-sm">
                  Approx.{" "}
                  <strong className="text-warm-800">10–15 min</strong> by taxi,
                  Grab, or tricycle
                </p>
              </div>
              <div className="bg-champagne-50 border border-gold-100 rounded p-4">
                <p className="text-xs tracking-widest uppercase text-gold-500 font-semibold mb-1.5">
                  Reception
                </p>
                <p className="font-serif text-sm text-warm-800 font-light leading-snug mb-2">
                  Citystate Asturias Hotel
                </p>
                <p className="text-warm-600 text-sm">
                  Approx.{" "}
                  <strong className="text-warm-800">10–15 min</strong> by taxi,
                  Grab, or tricycle
                </p>
              </div>
            </div>
          </Card>

          {/* Accommodations */}
          <Card title="Where to Stay">
            <p className="text-warm-700 text-sm leading-relaxed mb-5">
              We recommend booking accommodations in Puerto Princesa City for
              easy access to the venue.
            </p>
            <div className="divide-y divide-gold-100">
              {[
                {
                  name: "Citystate Asturias Hotel",
                  badge: "Reception venue",
                  address: "South National Highway, Tiniguiban Heights, Puerto Princesa City",
                  phone: "(048) 434-3852",
                  fb: "https://www.facebook.com/share/18xipr18NY/",
                },
                {
                  name: "Crown Hotel Palawan at Harbour Springs",
                  badge: "Preparation venue",
                  address: "Barangay, KM. 12 National Highway, Puerto Princesa City, 5300 Palawan",
                  phone: "0916 625 6665",
                  note: "Ideally, our entourage (excluding Principal Sponsors) joining the preparation shoot should book here. If not, don't worry — we'll provide transportation for those staying elsewhere.",
                },
                {
                  name: "Southwind",
                  address: "South National Highway, Brgy. Tiniguiban, Puerto Princesa City",
                  phone: "+63 917 127 0045",
                  fb: "https://www.facebook.com/share/1F37wEJaau/",
                },
                {
                  name: "Hue Hotels and Resorts",
                  address: "Km. 3 Puerto Princesa North Road, Brgy. San Manuel, Puerto Princesa City",
                  phone: "+63 2 8969 999",
                  fb: "https://www.facebook.com/share/1GqEP4nPRU/",
                },
                {
                  name: "Holiday Suites",
                  address: "North National Highway, Brgy. San Manuel, Puerto Princesa City (in front of Robinsons Place Palawan)",
                  phone: "+63 939 924 2756",
                  fb: "https://www.facebook.com/share/1BVUDwQZ5U/",
                },
                {
                  name: "Aziza Paradise Hotel",
                  address: "BM Road, Brgy. San Manuel, Puerto Princesa City",
                  phone: "(048) 434-2405",
                  fb: "https://www.facebook.com/share/1DAnwe7e9u/",
                },
                {
                  name: "One Eight Residence Inn",
                  badge: "Best Value",
                  badgeFilled: true,
                  address: "Lot 15 Block 5 Nadayao Road, Magdalena Subdivision, Brgy. San Pedro, Puerto Princesa City",
                  phone: "+63 920 280 0132",
                  fb: "https://www.facebook.com/share/1GJt4qWhuF/",
                },
                {
                  name: "GoHotels Puerto Princesa",
                  address: "North Road, Brgy. San Manuel, Puerto Princesa City",
                  phone: "(048) 434-0001",
                  fb: "https://www.facebook.com/share/182WLM6ov9/",
                },
              ].map((hotel) => (
                <div key={hotel.name} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {hotel.fb ? (
                      <a
                        href={hotel.fb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-warm-800 hover:text-gold-500 transition-colors duration-200 underline-offset-2 hover:underline"
                      >
                        {hotel.name}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-warm-800">
                        {hotel.name}
                      </span>
                    )}
                    {hotel.badge && (
                      <span
                        className={`text-[10px] tracking-widest uppercase rounded px-1.5 py-0.5 leading-none ${
                          hotel.badgeFilled
                            ? "bg-gold-200 text-warm-800"
                            : "border border-gold-300 text-gold-600"
                        }`}
                      >
                        {hotel.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-warm-600 text-sm mt-0.5 leading-snug">
                    {hotel.address}
                  </p>
                  <a
                    href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                    className="text-warm-500 text-sm mt-0.5 inline-block hover:text-gold-500 transition-colors duration-200"
                  >
                    {hotel.phone}
                  </a>
                  {hotel.note && (
                    <p className="text-warm-400 text-xs italic mt-1.5 leading-snug">
                      {hotel.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Weather */}
          <Card title="Weather in November">
            <p className="text-warm-700 text-sm leading-relaxed">
              Expect warm, pleasant weather (25–30°C). November is part of
              Palawan&apos;s dry season. Bring sunscreen, sunglasses, and stay
              hydrated! Light, breathable fabrics are recommended.
            </p>
          </Card>

          {/* Things to Do */}
          <Card title="Explore Palawan">
            <p className="text-warm-700 text-sm leading-relaxed mb-3">
              Make a vacation out of it! Puerto Princesa offers amazing
              experiences:
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-6">
              {attractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="flex flex-col items-center text-center"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAttraction(attraction)}
                    aria-label={`View full-size photo: ${attraction.name}`}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm border border-black/8 flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <img
                      src={attraction.img}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: attraction.objectPosition }}
                    />
                  </button>
                  <p className="text-[11px] md:text-xs text-warm-700 mt-2 leading-tight font-medium px-0.5">
                    {attraction.name}
                  </p>
                  {attraction.caption && (
                    <p className="text-[9px] md:text-[10px] text-warm-400 mt-0.5 leading-tight px-0.5">
                      {attraction.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-warm-400 text-xs italic mt-3 leading-snug">
              Need a travel guide to help plan these activities? Ate Dhes
              Sariego can help arrange guided tours — contact her at 0995 200
              8314.
            </p>
          </Card>
        </div>
      </FadeInSection>

      <Lightbox
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </Layout>
  );
}

export default Travel;
