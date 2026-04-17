import React from 'react';
import { CardProcess } from './CardProcess';

export const Process = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center lg:my-40">
      <h1 className="text-6xl font-display font-semibold">
        DE LOS <span className="text-primary">BITS</span> AL{' '}
        <span className="text-tertiary">PINCEL</span>
      </h1>
      <p className="text-2xl mt-10 mb-40 font-sans">
        El viaje de una obra maestra: donde la precisión digital se encuentra
        con la mano humana.
      </p>
      <div className="grid md:grid-cols-3 gap-12 px-6 md:px-16">
        <CardProcess />
      </div>
    </section>
  );
};
