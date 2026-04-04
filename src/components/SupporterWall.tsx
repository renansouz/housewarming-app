"use client";
import { supporters } from "@/data/supporters";
import { useLanguage } from "@/context/LanguageContext";
import { User } from "lucide-react";

export default function SupporterWall() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">{t.ranking}</h2>
        <div className="h-1 w-12 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="space-y-4 px-6 max-h-[400px] overflow-y-auto">
        {supporters.map((person) => (
          <div key={person.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-[1.01] transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                <User size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{person.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-tight">
                   {person.giftName}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-blue-600">R$ {person.amount}</p>
              <p className="text-[10px] text-slate-400 font-medium">{person.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}