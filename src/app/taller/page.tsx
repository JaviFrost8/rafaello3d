'use client';
import { CallToAction } from './components/CallToAction';
import { Steps } from './components/Steps';

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-10 animate-fade-in animate-duration-300">
        <div className=" flex flex-col justify-center items-center w-full">
          <h3 className="font-display text-secondary tracking-[4px]">
            TIMELINE DE PRODUCCIÓN
          </h3>
          <h2 className="font-display text-5xl text-center mx-4 lg:text-8xl font-bold mt-4 md:mt-8">
            Viaje al <span className="text-tertiary">acabado</span>
          </h2>
          <p className="font-sans max-w-3xl text-center lg:text-xl px-4 mt-5 lg:mt-10 text-white/60">
            Un recorrido desde el concepto digital hasta la perfección física.
            Experimenta el rigor técnico y la pasión artística que definen cada
            pieza de Rafaello3D.
          </p>
        </div>
      </div>
      <Steps />
      <CallToAction />
    </>
  );
}
