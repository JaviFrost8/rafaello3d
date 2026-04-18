import Link from 'next/link';
import React from 'react';

export const Hero = () => {
  return (
    <section className="relative flex w-full h-screen">
      <div className="flex w-full items-center lg:ml-32">
        <div className="mt-6">
          <div className="font-display w-fit text-secondary font-semibold tracking-[2] bg-[#325255] text-sm rounded-full px-3 py-1 border mb-8 animate-fade-in animate-delay-200">
            ARTESANÍA DE SIGUIENTE GENERACIÓN
          </div>
          <h1 className="lg:text-9xl font-display font-semibold animate-fade-in animate-delay-700">
            Más allá de lo
            <br />
            <span className="text-primary">digital</span>
          </h1>
          <h2 className="sr-only">
            Servicio de impresión 3D personalizada en Chiclana de la Frontera
          </h2>
          <p className="lg:text-3xl font-sans mt-10 animate-fade-in animate-delay-700">
            Donde la precisión del modelado 3D converge con la <br />
            sensibilidad del acabado a mano. Piezas únicas que <br />
            respiran alma en el mundo físico.
          </p>
          <div className="flex lg:gap-10 animate-fade-in animate-delay-700">
            <Link href={'/galeria'}>
              <button className="mt-12 bg-primary font-sans text-black px-6 py-3 rounded-2xl border-2 border-[#cd95fd] font-semibold cursor-pointer shadow-[0_0_20px_rgba(205,149,253,0.6)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(205,149,253,0.9)]">
                Explorar colección
              </button>
            </Link>
            <Link href={'/taller'}>
              <button className="mt-12 bg-transparent font-sans text-primary px-6 py-3 rounded-2xl border-2 border-[#cd95fd] font-semibold cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(205,149,253,0.6)] duration-300 ">
                Nuestro Proceso
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/hero-wallpaper.webp')] bg-cover bg-center -z-10"></div>
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
    </section>
  );
};
