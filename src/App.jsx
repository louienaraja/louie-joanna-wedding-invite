import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import Travel from "./sections/Travel";
import WhatToWear from "./sections/WhatToWear";
import RSVP from "./sections/RSVP";
import Entourage from "./sections/Entourage";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-champagne-50">
      <Navbar />
      <Hero />
      <OurStory />
      <Travel />
      <WhatToWear />
      <RSVP />
      <Entourage />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
