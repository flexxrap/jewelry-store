"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl tracking-[0.25em] text-[var(--gold)] uppercase">
          Aurum
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname === href
                  ? "text-[var(--gold)]"
                  : "text-[var(--text-muted)] hover:text-[var(--cream)]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/catalog" className="btn-gold text-xs py-2.5 px-7">
            Смотреть коллекцию
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block h-px w-6 bg-[var(--cream)] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-[var(--cream)] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[var(--cream)] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-8 flex flex-col gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
