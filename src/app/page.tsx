import { Process } from '@/components/Principal/Process';
import { Hero } from '../components/Principal/Hero';
import { AboutRafaello } from '@/components/Principal/AboutRafaello';
import { GetYourFigure } from '@/components/Principal/GetYourFigure';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Process />
      <AboutRafaello />
      <GetYourFigure />
    </div>
  );
}
