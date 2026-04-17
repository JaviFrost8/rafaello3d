import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rafaello 3D',
  description:
    'Página web dedicada a la impresión 3D de figuras a tamaño real con acabado artesanal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
