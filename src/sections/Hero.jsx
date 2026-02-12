import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

function Hero() {
  const weddingDate = new Date("2026-11-11T14:00:00"); // 2 PM ceremony

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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-stone-50 px-4"
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-emerald-900 mb-4">
          Louie & Joanna
        </h1>
        <p className="text-2xl md:text-3xl text-stone-600 mb-2">
          are getting married!
        </p>
        <p className="text-xl text-stone-500 mb-12">
          November 11, 2026 • Puerto Princesa, Palawan
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-emerald-800">
              {timeLeft.days}
            </div>
            <div className="text-sm text-stone-600 mt-2">Days</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-emerald-800">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-stone-600 mt-2">Hours</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-emerald-800">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-stone-600 mt-2">Minutes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-emerald-800">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-stone-600 mt-2">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
