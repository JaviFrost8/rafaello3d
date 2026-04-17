import { processSteps } from '@/data/processSteps';
import { ProcessStep } from '@/types/process';
import Image from 'next/image';

export const CardProcess = () => {
  const colors = ['text-secondary', 'text-primary', 'text-tertiary'];

  return (
    <>
      {processSteps.map((step: ProcessStep, index) => (
        <article className="flex lg:w-[500] flex-col" key={step.id}>
          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src={step.image}
              alt={step.title}
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
      ))}
    </>
  );
};
