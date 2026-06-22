"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] backdrop-blur-md"
      style={{ background: "rgba(41,37,40,0.93)" }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo with shimmer */}
        <Link href="/" className="logo-shimmer font-heading text-2xl tracking-[0.28em] uppercase">
          Aurum
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                pathname === href ? "text-[var(--gold)] active" : "text-[var(--text-muted)] hover:text-[var(--cream)]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/catalog" className="btn-gold text-xs py-2.5 px-7">
            Коллекция
          </Link>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-[var(--cream)]" transition={{ duration: 0.3 }} />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-[var(--cream)]" transition={{ duration: 0.2 }} />
          <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-[var(--cream)]" transition={{ duration: 0.3 }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]"
            style={{ background: "rgba(41,37,40,0.98)" }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
