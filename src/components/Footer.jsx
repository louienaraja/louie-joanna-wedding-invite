function Footer() {
  return (
    <footer className="bg-charcoal-900 text-champagne-200 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-serif font-light tracking-widest text-gold-300 mb-2">
          Louie &amp; Joanna
        </h3>
        <p className="text-warm-400 text-sm tracking-widest uppercase mb-6">
          November 11, 2026 &nbsp;·&nbsp; Puerto Princesa, Palawan
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-charcoal-700" />
          <div className="w-1 h-1 bg-gold-600 rotate-45" />
          <div className="h-px w-16 bg-charcoal-700" />
        </div>

        <p className="text-sm text-warm-500">Made with ❤️ for our special day</p>
        <p className="text-xs text-charcoal-700 mt-2">
          © 2026 Louie &amp; Joanna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
