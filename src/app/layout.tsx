import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { WhatsappButton } from './components/layout/WhatsappButton';
import { Footer } from './components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Impresión 3D en Chiclana | Figuras a tamaño real.',
  description:
    'Servicio de impresión 3D en Chiclana de la Frontera. Creamos figuras personalizadas a tamaño real con acabados artesanales. Pide tu presupuesto.',
  keywords: [
    'impresión 3D Chiclana',
    'figuras 3D personalizadas Cádiz',
    'impresión 3D a medida',
  ],
  openGraph: {
    title: 'Impresión 3D en Chiclana | Figuras a tamaño real.',
    description:
      'Creamos figuras 3D personalizadas a tamaño real con acabados artesanales.',
    url: 'https://rafaello3d.es',
    siteName: 'Impresión 3D Chiclana',
    images: [
      {
        url: 'https://tudominio.com/og-image.webp',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
