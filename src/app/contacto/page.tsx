'use client';
import { Cards } from './components/Cards';
import { Form } from './components/Form';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <h3 className="font-display text-secondary tracking-[4px]">
          FASE DE ENLACE
        </h3>
        <h2 className="font-display text-5xl text-center mx-4 lg:text-6xl font-bold mt-4 md:mt-8">
          Hablemos de <span className="text-tertiary">tu figura</span>
        </h2>
        <p className="text-center font-sans mx-4 mt-4 lg:mt-10 text-white/60">
          Cuéntanos tu idea y te ayudamos a convertirla en una pieza real.{' '}
          <br />
          Puedes escribirnos por WhatsApp, email o usar el formulario.
        </p>
      </motion.div>
      <Cards />
      <Form />
    </div>
  );
}
