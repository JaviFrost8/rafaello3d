'use client';

import Link from 'next/link';
import { NavLink } from './NavLink';

export const Header = () => {
  return (
    <header className="flex bg-background-secondary/60 backdrop-blur-md w-full md:px-20 py-10 justify-between items-center">
      <Link href="/">
        <div className="font-display text-3xl font-bold text-primary">
          RAFAELLO 3D
        </div>
      </Link>

      <nav className="font-sans md:text-xl">
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
        <div className="bg-primary text-[#572285] font-sans font-bold px-6 py-2 rounded-xl">
          Pedir presupuesto
        </div>
      </Link>
    </header>
  );
};
