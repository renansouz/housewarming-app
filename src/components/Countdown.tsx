"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Countdown() {
  const { t } = useLanguage();
  
  const targetDate = new Date(2026, 5, 6, 18, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeItems = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 my-8">
      {timeItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold text-slate-700 shadow-sm">
            {item.value}
          </div>
          <span className="text-xs uppercase tracking-wider mt-2 text-slate-500 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}