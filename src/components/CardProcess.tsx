'use client';
import { processSteps } from '@/data/processSteps';
import { ProcessStep } from '@/types/process';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const CardProcess = () => {
  const colors = ['text-secondary', 'text-primary', 'text-tertiary'];

  return (
    <>
      {processSteps.map((step: ProcessStep, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <article className="flex lg:w-[500] flex-col">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src={step.image}
                alt={
                  'Proceso de fabricación de figura mediante impresión 3D en Chiclana de la Frontera'
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-5 items-center my-8">
              <span className="text-7xl text-white/10 font-display font-bold">
                {String(step.id).padStart(2, '0')}
              </span>
              <h2
                className={`${colors[index]} text-3xl font-display font-semibold`}
              >
                {step.title}
              </h2>
            </div>
            <div>
              <p className="font-sans text-xl text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </article>
        </motion.div>
      ))}
    </>
  );
};
