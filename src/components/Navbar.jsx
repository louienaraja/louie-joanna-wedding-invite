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
        isScrolled
          ? "bg-champagne-50/95 backdrop-blur-sm shadow-sm border-b border-gold-200 py-4"
          : "bg-charcoal-800 py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className={`text-xl font-serif tracking-wider transition ${
            isScrolled ? "text-warm-900" : "text-gold-300"
          }`}
        >
          L &amp; J
        </button>

        <div className="hidden md:flex gap-8">
          {["home", "our-story", "faq", "rsvp", "travel"].map((id) => {
            const label =
              id === "home"
                ? "Home"
                : id === "our-story"
                ? "Our Story"
                : id.charAt(0).toUpperCase() + id.slice(1);
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id === "home" ? "hero" : id)}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isScrolled
                    ? "text-warm-700 hover:text-gold-500"
                    : "text-champagne-200 hover:text-gold-300"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
