'use client';
import React from 'react';
import { CardProcess } from './CardProcess';
import { motion } from 'framer-motion';

export const Process = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className="flex flex-col w-full justify-center items-center lg:my-40">
        <h2 className="text-6xl font-display font-semibold">
          DE LOS <span className="text-primary">BITS</span> AL{' '}
          <span className="text-tertiary">PINCEL</span>
        </h2>
        <p className="text-2xl mt-10 mb-40 font-sans text-white/60">
          El viaje de una obra maestra: donde la precisión digital se encuentra
          con la mano humana.
        </p>
        <div className="grid md:grid-cols-3 gap-12 px-6 md:px-16">
          <CardProcess />
        </div>
      </section>
    </motion.div>
  );
};
