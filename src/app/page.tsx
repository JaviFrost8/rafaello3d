import { Process } from '@/components/Process';
import { Hero } from '../components/Hero';
import { AboutRafaello } from '@/components/AboutRafaello';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Process />
      <AboutRafaello />
    </div>
  );
}
