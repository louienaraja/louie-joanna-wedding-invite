function GoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-6 ${className}`}>
      <div className="h-px flex-1 max-w-32 bg-gold-200" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold-400 flex-shrink-0"
      >
        {/* Small 4-petal floral motif */}
        <path
          d="M10 1C10 1 11.5 5.5 10 7C8.5 5.5 10 1 10 1Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M10 19C10 19 8.5 14.5 10 13C11.5 14.5 10 19 10 19Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M1 10C1 10 5.5 8.5 7 10C5.5 11.5 1 10 1 10Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M19 10C19 10 14.5 11.5 13 10C14.5 8.5 19 10 19 10Z"
          fill="currentColor"
          opacity="0.7"
        />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 max-w-32 bg-gold-200" />
    </div>
  );
}

export default GoldDivider;
