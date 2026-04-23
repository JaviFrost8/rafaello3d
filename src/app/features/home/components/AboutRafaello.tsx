'use client';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Map } from './Map';
import { motion } from 'framer-motion';

export const AboutRafaello = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="flex flex-col bg-background-secondary w-full md:px-16 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.5 }}
        >
          <div className="mt-10 px-4 lg:mt-20">
            <h2 className="font-display md:text-xl tracking-[2] text-secondary ml-1">
              EL PULSO CREATIVO
            </h2>
            <h2 className="font-display text-4xl lg:text-8xl mt-4 md:mt-8 font-bold">
              El taller de <span className="text-primary">Chiclana</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start md:flex-row w-full mt-6 md:mt-14 px-4">
            <p className="flex font-sans md:w-[50%] text-xl lg:text-2xl md:pr-20 leading-relaxed text-white/60">
              Somos una empresa de Chiclana de la Frontera dedicada a la
              creación de figuras de coleccionista a escala real. Nacimos de la
              pasión por el detalle y la tecnología de impresión 3D,
              combinándola con el acabado artesanal a mano.
            </p>
            <div className="flex flex-col justify-center mt-6 md:mt-0">
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                <span className="text-3xl lg:text-5xl font-bold text-secondary md:pl-10">
                  1:1
                </span>
                <p className="font-display text-xl text-white/60 mt-4 md:pl-10 tracking-[2]">
                  ESCALA DE PRECISIÓN REAL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="relative z-10">
        {/*Fondo*/}
        <div className="absolute inset-0 bg-[url('/images/patron.webp')] bg-cover bg-center z-10 opacity-70"></div>
        {/*Degradado*/}
        <div className="absolute top-0 left-0 w-full h-[7%] md:h-[20%] bg-linear-to-b from-background-secondary to-transparent z-50"></div>
        <Map />
      </section>
    </>
  );
};
