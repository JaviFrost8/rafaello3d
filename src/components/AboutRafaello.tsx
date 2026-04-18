import { Map } from './Map';

export const AboutRafaello = () => {
  return (
    <section className="flex flex-col w-full md:px-16 mt-16">
      <div>
        <h2 className="font-display md:text-xl tracking-[2] text-secondary ml-1">
          EL PULSO CREATIVO
        </h2>
        <h2 className="font-display lg:text-8xl mt-8 font-bold">
          El taller de <span className="text-primary">Chiclana</span>
        </h2>
      </div>
      <div className="flex w-full md:mt-14 ">
        <p className="flex font-sans w-[50%] lg:text-2xl md:pr-20 leading-relaxed text-white/60">
          Somos una empresa de Chiclana de la Frontera dedicada a la creación de
          figuras de coleccionista a escala real. Nacimos de la pasión por el
          detalle y la tecnología de impresión 3D, combinándola con el acabado
          artesanal a mano.
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

      <Map />
    </section>
  );
};
