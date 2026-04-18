import Image from 'next/image';
import React from 'react';

export const Map = () => {
  return (
    <div className="md:mt-24 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-200 lg:h-[700] mx-auto">
        <div className="relative flex justify-center items-center w-full h-full aspect-square rounded-xl overflow-hidden">
          <div className="relative w-[80%] h-[80%] border border-[#00f0ff] rounded-lg overflow-hidden shadow-[0_0_40px_#00f0ff66]">
            <Image
              src={'/images/mapa.webp'}
              alt="Impresora 3D"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-5 md:bottom-0 md:right-5 lg:bottom-10 lg:right-5 bg-[#325255] p-5 border border-[#00f0ff]">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-sans text-secondary">Coordenadas</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00f0ff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
                  <path d="M12 2l0 2" />
                  <path d="M12 20l0 2" />
                  <path d="M20 12l2 0" />
                  <path d="M2 12l2 0" />
                </svg>
              </div>
              <p className="font-display font-semibold border-b pb-4 border-[#00f0ff]/30">
                36°25′00″N 6°09′00″O
              </p>
            </div>
            <small className="font-display">Provincia: Cádiz</small>
          </div>
        </div>
        <div className="relative w-full h-full aspect-square rounded-xl overflow-hidden"></div>
      </div>
    </div>
  );
};
