'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

export const GetYourFigure = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: isMobile ? 0.2 : 0.5 }}
    >
      <section className="flex flex-col justify-center items-center mt-18 md:mt-34 z-10">
        <h2 className="font-display text-center px-4 text-4xl lg:text-6xl font-bold">
          HAZ REALIDAD <span className="text-primary">TU FIGURA</span> A{' '}
          <span className="text-tertiary">TAMAÑO REAL</span>
        </h2>
        <p className="text-center md:text-start font-sans text-xl my-5 md:text-2xl md:mt-10 text-white/60">
          Dinos que personaje tienes en mente y nosotros nos encargamos.
        </p>
        <Link href={'/contacto'}>
          <button className="font-display cursor-pointer bg-primary hover:bg-[#ead5fc] mt-8 px-6 py-4 md:mt-16 md:px-8 md:py-4 rounded-[6] text-[#572285] font-semibold shadow-[0_0_30px_rgba(205,149,253,0.8)] transition-all duration-300">
            PEDIR PRESUPUESTO
          </button>
        </Link>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:my-16">
          <div className="flex flex-col justify-center items-center w-[250] mt-12 md:mt-0">
            <span className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#00f0ff"
                className="icon icon-tabler icons-tabler-filled icon-tabler-truck"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783 .378l.074 .108l3 5l.055 .103l.04 .107l.029 .109l.016 .11l.003 .085v6a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2zm-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m.434 -9h-3.434v3h5.234z" />
              </svg>
            </span>
            <p className="font-display">ENVÍOS A TODA ESPAÑA</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[250]">
            <span className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#00f0ff"
                className="icon icon-tabler icons-tabler-filled icon-tabler-star"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
              </svg>
            </span>
            <p className="font-display">ACABADOS PROFESIONALES</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[250]">
            <span className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#00f0ff"
                className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14m8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
              </svg>
            </span>
            <p className="font-display">PRODUCCIÓN BAJO PEDIDO</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
