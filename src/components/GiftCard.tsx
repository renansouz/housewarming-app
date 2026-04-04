"use client";
import { Gift } from "@/data/gifts";
import { useLanguage } from "@/context/LanguageContext";
import { Heart } from "lucide-react";
import Link from "next/link";

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const { t } = useLanguage();

  const percentage = Math.min(Math.round((gift.collected / gift.price) * 100), 100);
  const isCompleted = gift.collected >= gift.price;

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
          {gift.image}
        </div>
        {isCompleted && (
          <span className="absolute -top-2 -right-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
            ✅ Concluído
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-1">{gift.name}</h3>
      <p className="text-slate-500 text-sm mb-4">
        {t.totalGoal}: R$ {gift.price.toLocaleString('pt-BR')}
      </p>

      <div className="mt-auto">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {percentage}% {t.collected}
          </span>
          <span className="text-sm font-bold text-slate-700">
            R$ {gift.collected.toLocaleString('pt-BR')}
          </span>
        </div>
        
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div 
            className={`h-full transition-all duration-1000 ease-out rounded-full ${
              isCompleted ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <Link 
          href={`/contribute?id=${gift.id}`}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
            isCompleted 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md active:scale-95'
          }`}
        >
          <Heart size={18} className={isCompleted ? "" : "fill-current"} />
          {isCompleted ? t.viewDetails : t.contribute}
        </Link>
      </div>
    </div>
  );
}