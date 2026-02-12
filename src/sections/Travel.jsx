import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

function Travel() {
  return (
    <Layout id="travel" className="bg-stone-50">
      <SectionTitle>Travel & Accommodations</SectionTitle>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Venue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
            Venue
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Church */}
            <div>
              <p className="text-stone-700 mb-2">
                <strong className="text-emerald-700">Ceremony</strong>
                <br />
                <strong>Divine Mercy Shrine and Parish</strong>
                <br />
                Barangay Sicsican Puerto Princesa City, Palawan 5300
              </p>

              <a
                href="https://maps.google.com/?q=Divine+Mercy+Shrine+and+Parish+Puerto+Princesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
              >
                Church on Google Maps
              </a>
            </div>

            {/* Reception */}
            <div>
              <p className="text-stone-700 mb-2">
                <strong className="text-emerald-700">Reception</strong>
                <br />
                <strong>AKC Country Homes</strong>
                <br />
                Parallel Road Corner Dagot Road, Brgy. San Manuel Puerto
                Princesa, Palawan 5300
              </p>

              <a
                href="https://maps.google.com/?q=AKC+Country+Homes+Puerto+Princesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
              >
                Reception on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
            Getting There
          </h3>
          <p className="text-stone-700 mb-3">
            <strong>By Air:</strong> Fly to Puerto Princesa International
            Airport (PPS). Direct flights available from Manila, Clark, and
            other major cities.
          </p>
          <p className="text-stone-700">
            <strong>From Airport to Venue:</strong> AKC Country Homes is
            approximately 15-20 minutes by taxi or Grab from the airport.
          </p>
        </div>

        {/* Accommodations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
            Where to Stay
          </h3>
          <p className="text-stone-700 mb-4">
            We recommend booking accommodations in Puerto Princesa City for easy
            access to the venue.
          </p>
          <div className="space-y-3 text-stone-700">
            <div>
              <strong className="text-emerald-700">Budget-Friendly: </strong>
              One-Eight Residence Inn - Nadayao Rd, San Pedro, Puerto Princesa
              City, Palawan
            </div>
            <div>
              <strong className="text-emerald-700">Mid-Range: </strong>
              CityState Asturias Hotel - South National Highway, Puerto Princesa
              City, 5300 Palawan
            </div>
            <div>
              <strong className="text-emerald-700">Luxury: </strong> Costa
              Palawan - F. Ponce de Leon Rd, San Pedro, Puerto Princesa City,
              5300 Palawan
            </div>
          </div>
        </div>

        {/* Weather */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
            Weather in November
          </h3>
          <p className="text-stone-700">
            Expect warm, pleasant weather (25-30°C). November is part of
            Palawan's dry season. Bring sunscreen, sunglasses, and stay
            hydrated! Light, breathable fabrics recommended.
          </p>
        </div>

        {/* Things to Do */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
            Explore Palawan
          </h3>
          <p className="text-stone-700 mb-3">
            Make a vacation out of it! Puerto Princesa offers amazing
            experiences:
          </p>
          <ul className="list-disc list-inside text-stone-700 space-y-2">
            <li>Underground River (UNESCO World Heritage Site)</li>
            <li>Honda Bay Island Hopping</li>
            <li>City Tour & Firefly Watching</li>
            <li>Sabang Beach</li>
            <li>Local restaurants & markets</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Travel;
