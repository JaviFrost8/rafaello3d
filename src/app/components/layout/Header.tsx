'use client';

import Link from 'next/link';
import { NavLink } from '../../features/home/components/NavLink';
import Image from 'next/image';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const handleClick = useScrollToTop(pathname, '/');

  return (
    <header className="sticky flex top-0 left-0 w-full items-center justify-between bg-background-secondary/60 backdrop-blur-md px-4 md:px-20 py-5 z-50 will-change-transform">
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
    </header>
  );
};
