import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#080808] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-heading text-3xl tracking-[0.25em] text-[var(--gold)] uppercase">Aurum</span>
            <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Эксклюзивные ювелирные украшения ручной работы. Каждое изделие — произведение искусства, созданное с любовью.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-5">Навигация</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Главная" },
                { href: "/catalog", label: "Каталог" },
                { href: "/contacts", label: "Контакты" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--text-muted)] hover:text-[var(--cream)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-5">Контакты</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li>Москва, Тверская, 12</li>
              <li>
                <a href="tel:+74951234567" className="hover:text-[var(--gold)] transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:hello@aurum.ru" className="hover:text-[var(--gold)] transition-colors">
                  hello@aurum.ru
                </a>
              </li>
              <li className="pt-2 text-xs">Пн–Сб: 10:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-muted)]">© 2024 Aurum. Все права защищены.</p>
          <p className="text-xs text-[var(--text-muted)] tracking-[0.1em]">Украшения ручной работы</p>
        </div>
      </div>
    </footer>
  );
}
