'use client';
import { Map } from './Map';
import { motion } from 'framer-motion';

export const AboutRafaello = () => {
  return (
    <>
      <section className="flex bg-background-secondary flex-col w-full md:px-16 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="lg:mt-20">
            <h2 className="font-display md:text-xl tracking-[2] text-secondary ml-1">
              EL PULSO CREATIVO
            </h2>
            <h2 className="font-display lg:text-8xl mt-8 font-bold">
              El taller de <span className="text-primary">Chiclana</span>
            </h2>
          </div>
          <div className="flex w-full md:mt-14 ">
            <p className="flex font-sans w-[50%] lg:text-2xl md:pr-20 leading-relaxed text-white/60">
              Somos una empresa de Chiclana de la Frontera dedicada a la
              creación de figuras de coleccionista a escala real. Nacimos de la
              pasión por el detalle y la tecnología de impresión 3D,
              combinándola con el acabado artesanal a mano.
            </p>
            <div className="flex flex-col justify-center">
              <div className="border-l border-white/10">
                <span className="lg:text-5xl font-bold text-secondary pl-10">
                  1:1
                </span>
                <p className="font-display text-xl text-white/60 mt-4 pl-10 tracking-[2]">
                  ESCALA DE PRECISIÓN REAL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="relative z-10">
        {/*Fondo*/}
        <div className="absolute inset-0 bg-[url('/images/patron.webp')] bg-cover bg-center z-10 opacity-40"></div>
        {/*Degradado*/}
        <div className="absolute top-0 left-0 w-full h-[20%] bg-linear-to-b from-background-secondary to-transparent z-50"></div>
        <Map />
      </section>
    </>
  );
};
