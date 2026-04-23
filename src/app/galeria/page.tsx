'use client';
import { Gallery } from '../features/galeria/components/Gallery';

export default function page() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col">
        <div className="md:w-[60%] mt-10 md:ml-24 animate-fade-in animate-duration-400">
          <h2 className="font-display text-8xl font-semibold">
            Algunas de <br />
            <span className="text-primary">nuestras piezas</span>
          </h2>
          <div className="bg-secondary h-1 w-22 my-8"></div>
          <p className="text-xl md:w-[60%] font-sans leading-relaxed mb-16">
            Aquí puedes ver algunas de las piezas que hemos creado para nuestros
            clientes. Cada una está hecha con atención al detalle, cuidando cada
            paso para conseguir un resultado único y de calidad. Nos adaptamos a
            cada idea para convertirla en algo real y especial.
          </p>
        </div>

        <Gallery />
      </div>
    </div>
  );
}
