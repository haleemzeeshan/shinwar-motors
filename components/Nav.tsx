'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { href: '/', label: '\ud83c\udf0d Import & Export' },
  { href: '/local', label: '\ud83c\udfea Local Sales' },
  { href: '/tow', label: '\ud83d\ude9b Tow Services' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Shinwar Motors
      </Link>
      <div className="nav-links">
        {pages.map((p) => {
          const isActive = p.href === '/' ? pathname === '/' : pathname.startsWith(p.href);
          return (
            <Link
              key={p.href}
              href={p.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              {p.label}
            </Link>
          );
        })}
      </div>
      <Link href="/tow" className="nav-cta">
        \ud83d\udea8 Emergency Tow
      </Link>
    </nav>
  );
}
