import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-emerald-800 py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className={`text-xl font-serif ${isScrolled ? "text-emerald-900" : "text-white"}`}
        >
          L & J
        </button>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className={`hover:text-emerald-300 transition ${isScrolled ? "text-stone-700" : "text-white"}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("our-story")}
            className={`hover:text-emerald-300 transition ${isScrolled ? "text-stone-700" : "text-white"}`}
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className={`hover:text-emerald-300 transition ${isScrolled ? "text-stone-700" : "text-white"}`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("rsvp")}
            className={`hover:text-emerald-300 transition ${isScrolled ? "text-stone-700" : "text-white"}`}
          >
            RSVP
          </button>
          <button
            onClick={() => scrollToSection("travel")}
            className={`hover:text-emerald-300 transition ${isScrolled ? "text-stone-700" : "text-white"}`}
          >
            Travel
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
