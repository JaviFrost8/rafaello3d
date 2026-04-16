'use client';

import Link from 'next/link';
import { NavLink } from './NavLink';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed flex bg-background-secondary/60 backdrop-blur-md w-full md:px-20 py-5 justify-between items-center z-100">
      <Link href="/">
        <div className="font-display text-3xl font-bold text-primary">
          <Image
            src={'/images/logo1.webp'}
            alt="Logo Rafaello 3D"
            width={180}
            height={150}
          />
        </div>
      </Link>

      <nav className="hidden md:flex font-sans md:text-xl">
        <ul className="flex gap-4 md:gap-14">
          <li>
            <NavLink href="/" label="Inicio" />
          </li>
          <li>
            <NavLink href="/galeria" label="Galería" />
          </li>
          <li>
            <NavLink href="/taller" label="Taller" />
          </li>
          <li>
            <NavLink href="/contacto" label="Contacto" />
          </li>
        </ul>
      </nav>

      <Link href="/contacto">
        <div className="bg-primary hover:bg-[#debbfd] text-[#572285] font-sans font-bold px-6 py-2 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(205,149,253,0.6)]">
          Pedir presupuesto
        </div>
      </Link>
    </header>
  );
};
