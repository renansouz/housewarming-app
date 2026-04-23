"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import GiftCard from "@/components/GiftCard";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Gift {
  id: number;
  name: string;
  price: number;
  collected: number;
  image: string;
}

export default function GiftsPage() {
  const { t } = useLanguage();
  const [dbGifts, setDbGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGifts() {
      try {
        const { data, error } = await supabase
          .from('gifts')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        if (data) setDbGifts(data);
      } catch (err) {
        console.error("Erro ao buscar presentes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGifts();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-2 mb-12">
          <Link href="/" className="text-slate-500 hover:text-slate-800 flex items-center gap-2 text-sm font-bold">
            <ArrowLeft size={16} /> {t.goBack}
          </Link>
          <h2 className="text-4xl font-black text-slate-900">{t.giftList}</h2>
          <p className="text-slate-600 font-medium">
            Escolha um item para contribuir. Toda ajuda é muito bem-vinda!
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
            <p className="font-black text-slate-900">Carregando presentes...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dbGifts.length > 0 ? (
              dbGifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
              ))
            ) : (
              <p className="col-span-full text-center py-10 font-bold text-red-500">
                Nenhum presente encontrado no banco de dados. Verifique o Supabase!
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}