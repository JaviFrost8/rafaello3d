'use client';

import Link from 'next/link';
import { NavLink } from '../../features/home/components/NavLink';
import Image from 'next/image';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const handleClick = useScrollToTop(pathname, '/');
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky flex flex-col top-0 left-0 w-full items-center justify-between bg-background-secondary/60 backdrop-blur-md px-4 md:px-20 py-5 z-50 will-change-transform">
      <div className="flex justify-between items-center w-full">
        <Link href="/" onClick={handleClick}>
          <Image
            src="/images/logo-rafaello.webp"
            alt="Logo Rafaello 3D"
            width={190}
            height={60}
            className="drop-shadow-[0_0_10px_rgba(205,149,253,0.8)] w-[150] lg:w-[180] xl:w-[200] h-auto"
            priority
          />
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

        <Link
          href="/contacto"
          className="hidden lg:block shrink-0 whitespace-nowrap"
        >
          <div className="bg-primary hover:bg-[#debbfd] text-[#572285] font-display font-bold px-6 py-2 rounded-[6] transition-all duration-300 shadow-[0_0_20px_rgba(205,149,253,0.8)]">
            Pedir presupuesto
          </div>
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden mr-4 transition-all duration-300"
        >
          {!isOpen ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 6a1 1 0 0 1 -1 1h-16a1 1 0 1 1 0 -2h16a1 1 0 0 1 1 1" />
                <path d="M21 12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 0 -2h16a1 1 0 0 1 1 1" />
                <path d="M21 18a1 1 0 0 1 -1 1h-16a1 1 0 0 1 0 -2h16a1 1 0 0 1 1 1" />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </span>
          )}
        </button>
      </div>

      <nav
        className={`md:hidden w-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto max-h-screen overflow-hidden mt-4' : 'opacity-0 pointer-events-none max-h-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col items-center gap-2 text-2xl">
          <li>
            <NavLink href="/" label="Inicio" close={closeMenu} />
          </li>
          <li>
            <NavLink href="/galeria" label="Galería" close={closeMenu} />
          </li>
          <li>
            <NavLink href="/taller" label="Taller" close={closeMenu} />
          </li>
          <li>
            <NavLink href="/contacto" label="Contacto" close={closeMenu} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
