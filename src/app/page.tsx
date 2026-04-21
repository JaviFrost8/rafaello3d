import { Process } from '@/app/features/home/components/Process';
import { Hero } from './features/home/components/Hero';
import { AboutRafaello } from '@/app/features/home/components/AboutRafaello';
import { GetYourFigure } from '@/app/features/home/components/GetYourFigure';

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
