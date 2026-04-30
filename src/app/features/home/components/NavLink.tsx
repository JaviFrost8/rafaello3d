'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
  close?: () => void;
};

export const NavLink = ({ href, label, close }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const handleClick = useScrollToTop(pathname, href);

  return (
    <Link
      href={href}
      onClick={(e) => {
        handleClick(e);
        close?.();
      }}
      className={`relative group transition-colors ${
        isActive ? 'text-secondary' : 'text-gray-400 hover:text-secondary'
      }`}
    >
      {label}

      <span
        className={`absolute left-0 -bottom-1 w-full h-[2] bg-secondary transition-transform origin-left
        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
      />
    </Link>
  );
};
