import { steps } from '@/data/steps';
import { Step } from '@/types/steps';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export const Steps = () => {
  const colors = ['#00f0ff', '#cd95fd', '#ff5c00'];

  const StepContent = ({ step, color }: { step: Step; color: string }) => (
    <>
      <div className="flex items-center gap-3 lg:gap-4 lg:my-4">
        <span
          className="text-3xl lg:text-5xl font-display font-bold"
          style={{ color: color + '20' }}
        >
          {step.number.padStart(2, '0')}
        </span>

        <span
          className="font-display rounded-sm py-1.5 lg:py-2 px-3 lg:px-4 text-xs lg:text-sm"
          style={{
            color,
            background: color + '20',
          }}
        >
          {step.fase}
        </span>
      </div>

      <h3 className="font-sans text-2xl lg:text-4xl lg:mb-4 font-bold">
        {step.title}
      </h3>

      <p className="font-sans text-sm lg:text-lg leading-relaxed text-white/50">
        {step.description}
      </p>
    </>
  );

  return (
    <div className="w-full mt-12 lg:mt-20 flex flex-col items-center relative mb-12">
      {/* Línea central */}
      <div
        className="absolute left-1/2 top-0 bottom-30 w-0.5 hidden lg:block z-0"
        style={{
          background: `linear-gradient(to bottom, #00f0ff, #cd95fd, #ff5c00)`,
        }}
      />

      {steps.map((step, i) => {
        const color = colors[i % colors.length];
        const isEven = i % 2 === 0;

        return (
          <motion.div
            key={i}
            className="w-full max-w-6xl mb-16 lg:mb-40 relative z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* 📱 MOBILE */}
            <div className="flex flex-col justify-center items-center text-center gap-4 px-4 lg:hidden">
              <div className="relative w-full h-52 sm:h-60 overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <StepContent step={step} color={color} />
            </div>

            {/* 💻 DESKTOP */}
            <div className="hidden lg:grid grid-cols-2 gap-x-24 mx-6 items-center">
              {/* IZQUIERDA */}
              <div
                className={`flex flex-col ${isEven ? 'items-end text-right' : ''}`}
              >
                {isEven ? (
                  <StepContent step={step} color={color} />
                ) : (
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* DERECHA */}
              <div
                className={`flex flex-col ${!isEven ? 'items-start text-left' : ''}`}
              >
                {!isEven ? (
                  <StepContent step={step} color={color} />
                ) : (
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
