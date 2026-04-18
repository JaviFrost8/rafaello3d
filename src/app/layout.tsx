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
  title: 'Impresión 3D en Chiclana | Figuras personalizadas y a medida',
  description:
    'Servicio de impresión 3D en Chiclana de la Frontera. Creamos figuras personalizadas a tamaño real con acabados artesanales. Pide tu presupuesto.',
  keywords: [
    'impresión 3D Chiclana',
    'figuras 3D personalizadas Cádiz',
    'impresión 3D a medida',
  ],
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
