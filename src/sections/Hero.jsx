import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import GoldDivider from "../components/GoldDivider";

function CountdownTile({ value, label }) {
  return (
    <div className="bg-champagne-50/80 border border-gold-200 rounded px-6 py-4 flex flex-col items-center">
      <span className="font-serif text-4xl font-light text-gold-500 leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-xs tracking-widest uppercase text-warm-500">
        {label}
      </span>
    </div>
  );
}

function Hero() {
  const weddingDate = new Date("2026-11-11T14:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = differenceInDays(weddingDate, now);
      const hours = differenceInHours(weddingDate, now) % 24;
      const minutes = differenceInMinutes(weddingDate, now) % 60;
      const seconds = differenceInSeconds(weddingDate, now) % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex flex-col items-center justify-center bg-gradient-to-b from-champagne-50 to-champagne-100 px-4"
    >
      {/* Decorative corner-bracket frame */}
      <div className="relative px-10 py-8 md:px-20 md:py-12 text-center max-w-2xl w-full mx-auto">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold-300/70" />
        <span className="absolute top-0 right-0 w-10 h-10 border-t border-r border-gold-300/70" />
        <span className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-gold-300/70" />
        <span className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold-300/70" />

        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-warm-500 mb-3">
          You are cordially invited to celebrate
        </p>

        {/* Names */}
        <h1 className="font-serif text-6xl md:text-8xl text-warm-900 font-light leading-tight mb-1">
          Louie &amp; Joanna
        </h1>

        {/* Gold accent line under names */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gold-300" />
          <div className="w-1 h-1 bg-gold-400 rotate-45" />
          <div className="h-px w-12 bg-gold-300" />
        </div>

        <p className="font-serif text-2xl md:text-3xl italic text-warm-600 mb-1">
          are getting married!
        </p>
        <p className="text-sm tracking-widest uppercase text-warm-500 mt-1">
          November 11, 2026 &nbsp;·&nbsp; Puerto Princesa, Palawan
        </p>
      </div>

      {/* Divider */}
      <GoldDivider className="max-w-xs w-full" />

      {/* Countdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-lg w-full mx-auto">
        <CountdownTile value={timeLeft.days} label="Days" />
        <CountdownTile value={timeLeft.hours} label="Hours" />
        <CountdownTile value={timeLeft.minutes} label="Minutes" />
        <CountdownTile value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}

export default Hero;
