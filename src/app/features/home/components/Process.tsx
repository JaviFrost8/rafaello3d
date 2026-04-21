'use client';
import React from 'react';
import { CardProcess } from './CardProcess';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

export const Process = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
    >
      <section className="flex flex-col w-full justify-center items-center mt-15 lg:mt-40 lg:mb-20">
        <h2 className="text-center px-4 md:px-0 text-4xl lg:text-6xl font-display font-semibold">
          DE LOS <span className="text-primary">BITS</span> AL{' '}
          <span className="text-tertiary">PINCEL</span>
        </h2>
        <p className="text-center text-xl lg:text-2xl px-4 md:px-0 mt-8 md:mt-10 mb-15 md:mb-40 font-sans text-white/60">
          El viaje de una obra maestra: donde la precisión digital se encuentra
          con la mano humana.
        </p>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 xl:gap-12 px-2 md:px-4 lg:px-16">
          <CardProcess />
        </div>
      </section>
    </motion.div>
  );
};
