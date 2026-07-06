function SectionTitle({ children }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl md:text-5xl text-warm-900 tracking-wide font-light">
        {children}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-16 bg-gold-300" />
        <div className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
        <div className="h-px w-16 bg-gold-300" />
      </div>
    </div>
  );
}

export default SectionTitle;
