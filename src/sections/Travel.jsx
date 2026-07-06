import FadeInSection from "../components/FadeInSection";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

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
            <p className="text-warm-700 text-sm leading-relaxed mb-3">
              <strong className="text-warm-800">By Air:</strong> Fly to Puerto
              Princesa International Airport (PPS). Direct flights available from
              Manila, Clark, and other major cities.
            </p>
            <p className="text-warm-700 text-sm leading-relaxed">
              <strong className="text-warm-800">From Airport to Venue:</strong>{" "}
              Citystate Asturias Hotel is approximately 15–20 minutes by taxi or
              Grab from the airport.
            </p>
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
                    <a
                      href={hotel.fb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-warm-800 hover:text-gold-500 transition-colors duration-200 underline-offset-2 hover:underline"
                    >
                      {hotel.name}
                    </a>
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
            <ul className="text-warm-700 text-sm space-y-1.5">
              {[
                "Underground River (UNESCO World Heritage Site)",
                "Honda Bay Island Hopping",
                "City Tour & Firefly Watching",
                "Sabang Beach",
                "Local restaurants & markets",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5 flex-shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default Travel;
