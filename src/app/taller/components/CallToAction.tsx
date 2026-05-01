import Link from 'next/link';
import React from 'react';

export const CallToAction = () => {
  return (
    <div className="w-full flex flex-col items-center bg-background-secondary">
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#cd95fd] to-transparent mb-24"></div>
      <h2 className="font-display text-2xl lg:text-6xl font-bold px-4">
        EMPIEZA TU PROYECTO <span className="text-tertiary">HOY</span>
      </h2>
      <p className="text-xl lg:text-2xl text-white/50 mt-4 px-4 text-center">
        Cuéntame tu idea y te daré una propuesta adaptada a lo que necesitas,
        sin compromiso.
      </p>

      <Link href={'/contacto'}>
        <button className="font-display cursor-pointer bg-primary hover:bg-[#ead5fc] md:hover:px-10 mt-8 px-6 py-4 md:mt-16 md:px-8 md:py-4 rounded-[6] text-[#572285] font-semibold shadow-[0_0_30px_rgba(205,149,253,0.8)] transition-all duration-300">
          PEDIR PRESUPUESTO
        </button>
      </Link>
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#cd95fd] to-transparent mt-24"></div>
    </div>
  );
};
