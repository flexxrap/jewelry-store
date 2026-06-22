"use client";

import { useState } from "react";

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-[var(--border)] py-3 text-sm text-[var(--cream)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200";

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Свяжитесь с нами</p>
          <h1 className="font-heading text-5xl font-light text-[var(--cream)]">Контакты</h1>
          <div className="gold-line mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl font-light text-[var(--cream)] mb-10">Написать нам</h2>

            {sent ? (
              <div className="p-8 border border-[var(--gold)]/30 text-center">
                <div className="text-3xl text-[var(--gold)] mb-4">✓</div>
                <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-2">Сообщение отправлено</h3>
                <p className="text-sm text-[var(--text-muted)]">Мы свяжемся с вами в течение рабочего дня</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ваше сообщение *"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-gold btn-gold-filled px-12 py-4 text-xs">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-light text-[var(--cream)] mb-8">Наш адрес</h2>
              <div className="space-y-6">
                {[
                  { label: "Адрес", value: "Москва, ул. Тверская, 12, офис 301" },
                  { label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
                  { label: "Email", value: "hello@aurum.ru", href: "mailto:hello@aurum.ru" },
                  { label: "Режим работы", value: "Пн–Сб: 10:00 – 20:00" },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">{label}</span>
                    {href ? (
                      <a href={href} className="text-sm text-[var(--cream)] hover:text-[var(--gold)] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--cream)]">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-5">Мы в соцсетях</h3>
              <div className="flex gap-6">
                {[
                  { name: "Instagram", href: "#" },
                  { name: "Pinterest", href: "#" },
                  { name: "Telegram", href: "#" },
                  { name: "VK", href: "#" },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 border border-[var(--border)]">
              <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-3">Индивидуальный заказ</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Создаём украшения по вашим эскизам и идеям. Свяжитесь с нами для обсуждения деталей — воплотим любую мечту.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
