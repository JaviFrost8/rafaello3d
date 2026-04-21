'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

export const NavLink = ({ href, label }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
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
