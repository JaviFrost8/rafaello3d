import React from 'react';

export const Cards = () => {
  return (
    <div className="w-full flex justify-center mt-10 mb-10 px-4">
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-md md:max-w-2xl">
        {/* WhatsApp */}
        <a
          href="https://wa.me/34666105692?text=Hola,%20quiero%20información"
          target="_blank"
          className="flex flex-col items-center justify-center w-full py-6 md:py-10 bg-background-secondary rounded-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="p-2 md:p-3 bg-[#387f85]/50 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </div>

          <span className="text-[10px] md:text-xs mt-3 font-sans tracking-[2] text-center">
            WHATSAPP
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:rafatati56@outlook.es"
          className="flex flex-col items-center justify-center w-full py-6 md:py-10 bg-background-secondary rounded-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="p-2 md:p-3 bg-[#634e75]/50 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cd95fd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>

          <span className="text-[10px] md:text-xs mt-3 font-sans tracking-[2] text-center">
            EMAIL
          </span>
        </a>
      </div>
    </div>
  );
};
