'use client';

import Link from 'next/link';
import { NavLink } from './NavLink';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed flex bg-background-secondary/60 backdrop-blur-md w-full md:px-20 py-5 justify-between items-center z-50">
      <Link href="/">
        <div className="font-display text-3xl font-bold text-primary">
          <Image
            src={'/images/logo-rafaello.webp'}
            alt="Logo Rafaello 3D"
            width={190}
            height={60}
            className="drop-shadow-[0_0_10px_rgba(205,149,253,0.8)]"
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
        <div className="bg-primary hover:bg-[#debbfd] text-[#572285] font-display font-bold px-6 py-2 rounded-[6] transition-all duration-300 shadow-[0_0_20px_rgba(205,149,253,0.8)]">
          Pedir presupuesto
        </div>
      </Link>
    </header>
  );
};
