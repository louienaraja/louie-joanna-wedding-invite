import { useState, useMemo, useRef } from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

const GUEST_LIST = [
  // VIP 1
  { name: "Glenn Puertollano", table: "VIP 1" },
  { name: "Lorna Luisa Caeg-Viñola", table: "VIP 1" },
  { name: "Jose Sariego", table: "VIP 1" },
  { name: "Derek Riego Puertollano", table: "VIP 1" },
  { name: "Charo Fabian-Puertollano", table: "VIP 1" },
  { name: "Alonzo C. Española", table: "VIP 1" },
  { name: "Edmundo T. Aralar", table: "VIP 1" },
  { name: "Gigi Aralar", table: "VIP 1" },
  { name: "Mary Joy P. San Jose", table: "VIP 1" },
  { name: "Dr. Rowena Gan", table: "VIP 1" },

  // VIP 2
  { name: "Manuel S. Naraja", table: "VIP 2" },
  { name: "Ofelia G. Naraja", table: "VIP 2" },
  { name: "Joel R. Puertollano", table: "VIP 2" },
  { name: "Brenda S. Puertollano", table: "VIP 2" },
  { name: "Miguel Luis Naraja", table: "VIP 2" },
  { name: "Bryann S. Puertollano", table: "VIP 2" },
  { name: "Mercedita Puertollano", table: "VIP 2" },
  { name: "Arnel Puertollano", "table": "VIP 2" },
  { name: "Antonia Bernabe Dela Cruz", table: "VIP 2" },
  { name: "Idgitte E. Dasugo", table: "VIP 2" },

  // TABLE 1
  { name: "Desirie Sariego", table: "Table 1" },
  { name: "Evlynne Mae Danielle Caabay", table: "Table 1" },
  { name: "Ethyl Gwynne Caabay", table: "Table 1" },
  { name: "Eugenio Caabay", table: "Table 1" },
  { name: "Lorelei Caabay", table: "Table 1" },
  { name: "Loraine Abiog", table: "Table 1" },
  { name: "Cheryll Vicencio", table: "Table 1" },
  { name: "Gerald Vicencio", table: "Table 1" },
  { name: "CZ Puertollano", table: "Table 1" },
  { name: "Michael Angelo R. Puertollano", table: "Table 1" },

  // TABLE 2
  { name: "Michael Lawrence Gardon Naraja", table: "Table 2" },
  { name: "Marc Lester Naraja", table: "Table 2" },
  { name: "Monica Louise Naraja", table: "Table 2" },
  { name: "Jzanel Arteta", table: "Table 2" },
  { name: "Joshua Sariego", table: "Table 2" },
  { name: "Matthew Ivan C. Naraja", table: "Table 2" },
  { name: "Austin James Sy", table: "Table 2" },
  { name: "Carlo Danniel M. Mapue", table: "Table 2" },
  { name: "Jayvee Rivera", table: "Table 2" },

  // TABLE 3
  { name: "Reiner Ian Herejias", table: "Table 3" },
  { name: "Kaye Maglalang", table: "Table 3" },
  { name: "Michael Angelo Go", table: "Table 3" },
  { name: "Mara Gutierrez", table: "Table 3" },
  { name: "Ivan Bergonia", table: "Table 3" },
  { name: "Tricia Songco", table: "Table 3" },
  { name: "Jonathan Gabriel P. Agustin", table: "Table 3" },
  { name: "April Rose Fae Vega", table: "Table 3" },
  { name: "Kevin John V. Yumul", table: "Table 3" },
  { name: "Samantha Isabelle J. Uy", table: "Table 3" },

  // TABLE 4
  { name: "Michelle Caday", table: "Table 4" },
  { name: "Sherley Ver Saladaga", table: "Table 4" },
  { name: "Katrina Arevalo", table: "Table 4" },
  { name: "Kia Karla Runio", table: "Table 4" },
  { name: "Heilia Prudenciano", table: "Table 4" },
  { name: "Althea Carabaña", table: "Table 4" },
  { name: "Jan Michael Carabaña", table: "Table 4" },
  { name: "Romel Cortez", table: "Table 4" },
  { name: "Amanda Regina Gonzales-Cortez", table: "Table 4" },
  { name: "Maxin Klaire Snodgrass", table: "Table 4" },

  // TABLE 5
  { name: "Teresita N. Lopez", table: "Table 5" },
  { name: "Marinea N. Lopez", table: "Table 5" },
  { name: "Chris Adiel L. Chan", table: "Table 5" },
  { name: "Juvy Pacle", table: "Table 5" },
  { name: "Aaron Lopez", table: "Table 5" },
  { name: "Athena Euna Norelle Suazo", table: "Table 5" },
  { name: "Ariana Una Lopez", table: "Table 5" },
  { name: "Tita Mylene Cabredo", table: "Table 5" },
  { name: "Tita Mylene Cabredo Companion", table: "Table 5" },

  // TABLE 6
  { name: "Roselle Niña Christine Sariego-Llacuna", table: "Table 6" },
  { name: "Nessa Llacuna", table: "Table 6" },
  { name: "Helene Raine Decipolo", table: "Table 6" },
  { name: "Eque Sariego", table: "Table 6" },
  { name: "Edna Sariego", table: "Table 6" },
  { name: "Edrick Sariego", table: "Table 6" },
  { name: "Roly Luvimin Sariego", table: "Table 6" },
  { name: "Yolanda Sariego", table: "Table 6" },
  { name: "Dona Sariego", table: "Table 6" },
  { name: "Daniella Sariego", table: "Table 6" },

  // TABLE 7
  { name: "Mely Española", table: "Table 7" },
  { name: "Marita Española", table: "Table 7" },
  { name: "Manuel Española", table: "Table 7" },
  { name: "Dante Diaz", table: "Table 7" },
  { name: "Dianza Merlos", table: "Table 7" },
  { name: "Bianca Merlos", table: "Table 7" },
  { name: "Raymund Española", table: "Table 7" },
  { name: "Cyril Garcia", table: "Table 7" },
  { name: "Joy Mabunga", table: "Table 7" },
  { name: "Luis Miguel Española", table: "Table 7" },

  // TABLE 8
  { name: "Salvacion Sabuya", table: "Table 8" },
  { name: "Mary Lampitoc", table: "Table 8" },
  { name: "Aileen Fabellon", table: "Table 8" },
  { name: "Lebe Besa", table: "Table 8" },
  { name: "Judith Dela Chica", table: "Table 8" },
  { name: "Norma Lim", "table": "Table 8" },
  { name: "Cita Lim", table: "Table 8" },
  { name: "Laiza Magallon", table: "Table 8" },
  { name: "Nelit Magallon", table: "Table 8" },
  { name: "Elsie Catublas", table: "Table 8" },

  // TABLE 9
  { name: "Fatima Camille Cruz", table: "Table 9" },
  { name: "Matthew Cruz", table: "Table 9" },
  { name: "Aechthighearn Carlyle Cruz", table: "Table 9" },
  { name: "Schuyler Galilee Cruz", table: "Table 9" },
  { name: "Sophie Aulivia Chanel Cruz", table: "Table 9" },
  { name: "Harold Gardon", table: "Table 9" },
  { name: "Julius Anskar Garay", table: "Table 9" },
  { name: "Siva Zumthor Garay", table: "Table 9" },
  { name: "Carol Angelica Ilao", table: "Table 9" },
  { name: "Dr. Vinola's Daughter", table: "Table 9" },

  // TABLE 10
  { name: "Joan Bataga", table: "Table 10" },
  { name: "Marissa Soriano", table: "Table 10" },
  { name: "Minerva Gan Casanova", table: "Table 10" },
  { name: "Dr. Gan's Sister", table: "Table 10" },
];

const inputClass =
  "w-full px-4 py-3 text-sm text-warm-800 bg-white border border-gold-200 rounded " +
  "focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 " +
  "placeholder:text-warm-400 transition-colors duration-200";

const labelClass =
  "block text-xs tracking-widest uppercase text-gold-600 font-semibold mb-1.5";

export default function SeatFind() {
  const [query, setQuery] = useState("");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const blurTimeoutRef = useRef(null);

  // Filter options based on query (case-insensitive)
  const filteredGuests = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return GUEST_LIST.filter((g) =>
      g.name.toLowerCase().includes(trimmed)
    );
  }, [query]);

  // Select a guest from the combobox dropdown
  const handleSelect = (guest) => {
    setSelectedGuest(guest);
    setQuery(guest.name);
    setIsOpen(false);
  };

  // Strict validation: clear query if not matched to a valid guest on blur
  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      if (!selectedGuest || selectedGuest.name !== query) {
        setQuery("");
        setSelectedGuest(null);
      }
    }, 200);
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    if (query.trim()) setIsOpen(true);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setSelectedGuest(null);
    setIsOpen(val.trim().length > 0);
  };

  const handleClear = () => {
    setQuery("");
    setSelectedGuest(null);
    setIsOpen(false);
  };

  return (
    <Layout id="seats" className="bg-champagne-50">
      <FadeInSection>
        <SectionTitle>Find Your Seat</SectionTitle>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-warm-600 mb-6 text-base leading-relaxed">
            Welcome to our reception! Please type your full name below to find
            your assigned table.
          </p>

          <div className="bg-white border border-gold-200 rounded shadow-sm p-6 md:p-8 space-y-6 text-left">
            {/* Combobox Search Field */}
            <div className="relative">
              <label className={labelClass}>
                Your Full Name <span className="text-red-400">*</span>
              </label>

              <div className="relative flex items-center">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Type your name to search..."
                  className={inputClass}
                />
                {query && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 text-xs text-warm-400 hover:text-warm-700 transition-colors uppercase font-medium tracking-wider"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown Menu */}
              {isOpen && (
                <ul className="absolute z-20 w-full mt-1 bg-white border border-gold-200 rounded shadow-lg max-h-56 overflow-y-auto divide-y divide-warm-100">
                  {filteredGuests.length > 0 ? (
                    filteredGuests.map((guest) => (
                      <li
                        key={guest.name}
                        onMouseDown={() => handleSelect(guest)}
                        className="px-4 py-3 text-sm text-warm-800 hover:bg-champagne-100 cursor-pointer transition-colors flex justify-between items-center"
                      >
                        <span className="font-medium">{guest.name}</span>
                        <span className="text-xs text-gold-600 font-semibold tracking-wider uppercase">
                          Select
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-3 text-sm text-warm-400 italic">
                      No matching guest found. Please check spelling.
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Display Assigned Table Result Card */}
            {selectedGuest && (
              <div className="mt-6 p-6 bg-champagne-100 border border-gold-300 rounded text-center space-y-2 animate-fadeIn">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-gold-300" />
                  <div className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
                  <div className="h-px w-8 bg-gold-300" />
                </div>
                <p className="text-xs tracking-widest uppercase font-semibold text-gold-600">
                  Welcome, {selectedGuest.name}!
                </p>
                <p className="font-serif text-3xl text-warm-900 font-light">
                  {selectedGuest.table}
                </p>
                <p className="text-xs text-warm-500 italic">
                  Please proceed to your assigned table upon entering the reception area.
                </p>
              </div>
            )}
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}