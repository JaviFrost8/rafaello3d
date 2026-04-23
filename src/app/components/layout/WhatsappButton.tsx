'use client';
import React, { useEffect, useState } from 'react';

export const WhatsappButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 rounded-full p-2 bg-[#25D366] shadow-lg transform hover:scale-95 transition-all duration-300 ease-out ${
        show
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-5 scale-50 pointer-events-none'
      }`}
    >
      <a
        href="https://wa.me/34666105692?text=Hola,%20quiero%20información"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </a>
    </div>
  );
};
