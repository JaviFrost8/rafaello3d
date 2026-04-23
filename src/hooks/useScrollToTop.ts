import { useRouter } from 'next/navigation';

export const useScrollToTop = (currentPath: string, targetPath: string) => {
  const router = useRouter();

  return (e: React.MouseEvent) => {
    if (currentPath === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(targetPath);
    }
  };
};
