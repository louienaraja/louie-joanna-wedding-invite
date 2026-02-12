import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import FAQ from "./sections/FAQ";
import RSVP from "./sections/RSVP";
import Travel from "./sections/Travel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <OurStory />
      <FAQ />
      <RSVP />
      <Travel />
      <Footer />
    </div>
  );
}

export default App;
