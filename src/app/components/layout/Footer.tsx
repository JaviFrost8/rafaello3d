'use client';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Social } from '../Social';

export const Footer = () => {
  const pathname = usePathname();
  const handleClick = useScrollToTop(pathname, '/');

  return (
    <>
      <footer className="flex flex-col md:flex-row w-full bg-background-secondary min-h-[300] py-10 md:py-30 md:justify-center gap-10 md:gap-60">
        <div className="font-sans">
          <Link
            href="/"
            onClick={handleClick}
            className="flex justify-center shrink-0"
          >
            <Image
              src="/images/logo-rafaello.webp"
              alt="Logo Rafaello 3D"
              width={190}
              height={60}
              className="drop-shadow-[0_0_10px_rgba(205,149,253,0.8)] w-[150] lg:w-[180] xl:w-[200] h-auto"
              priority
            />
          </Link>
          <Social />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-sans font-bold text-xl mb-6 text-primary">
            Navegación
          </h3>
          <nav className="md:flex md:flex-col font-sans">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href={'/'}
                  className="hover:text-secondary transition-all duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={'/galeria'}
                  className="hover:text-secondary transition-all duration-300"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href={'/taller'}
                  className="hover:text-secondary transition-all duration-300"
                >
                  Taller
                </Link>
              </li>
              <li>
                <Link
                  href={'/contacto'}
                  className="hover:text-secondary transition-all duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-sans font-bold text-xl mb-6 text-primary">
            Contacto
          </h3>
          <div className="my-2">
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                </svg>
              </span>
              <span>
                <a
                  href="https://www.google.com/maps/place/Chiclana+de+la+Frontera,+C%C3%A1diz/@36.4118808,-6.15084,12z/data=!3m1!4b1!4m6!3m5!1s0xd0c34bd56ad3247:0xf716d829c0c890f6!8m2!3d36.4165052!4d-6.1461102!16zL20vMDc4Ymxn?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="hover:text-secondary transition-all duration-300"
                >
                  Chiclana de la Frontera
                </a>
              </span>
            </div>
          </div>
          <div className="my-2">
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
                </svg>
              </span>
              <span>
                <a
                  className="hover:text-secondary transition-all duration-300"
                  href="tel:+34666105692"
                >
                  +34 666 10 56 92
                </a>
              </span>
            </div>
          </div>
          <div className="my-2">
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
              </span>
              <span>
                <a
                  className="hover:text-secondary transition-all duration-300"
                  href="mailto:rafatati56@outlook.es"
                >
                  rafatati56@outlook.es
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-sans font-bold text-xl mb-6 text-primary">
            Legal
          </h3>
          <ul>
            <li className="my-3 hover:text-secondary transition-all duration-400">
              <Link href={'/aviso-legal'}>Aviso legal</Link>
            </li>
            <li className="my-3 hover:text-secondary transition-all duration-400">
              <Link href={'/politica-de-privacidad'}>
                Política de privacidad
              </Link>
            </li>
            <li className="my-3 hover:text-secondary transition-all duration-400">
              <Link href={'/politica-de-cookies'}>Políticas de cookies</Link>
            </li>
          </ul>
        </div>
      </footer>
      <footer className="flex justify-center gap-8 py-8 font-sans font-[6]">
        <div className="flex flex-col items-center md:flex-row">
          <p>
            <small>&copy; 2026 RAFAELLO 3D | Desarrollado por</small>
          </p>
          <span>
            <a
              target="_blank"
              className="pl-1 hover:text-tertiary transition-all duration-300"
              href="https://portfoliov2vercel.vercel.app/"
            >
              <small>Javidev</small>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
