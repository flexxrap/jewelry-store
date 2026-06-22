"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Свяжитесь с нами</p>
          <h1 className="font-heading text-5xl font-light text-[var(--cream)]">Контакты</h1>
          <div className="gold-line mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-3xl font-light text-[var(--cream)] mb-10">Написать нам</h2>

            {sent ? (
              <div className="p-10 border border-[var(--gold)]/30 rounded-2xl text-center"
                style={{ background: "var(--bg-card)" }}>
                <div className="text-4xl text-[var(--gold)] mb-4">✓</div>
                <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-2">Сообщение отправлено</h3>
                <p className="text-sm text-[var(--text-muted)]">Мы свяжемся с вами в течение рабочего дня</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-300 cursor-pointer"
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
                    className="field-line"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="field-line"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ваше сообщение *"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="field-line resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold btn-gold-filled px-12 py-4">
                  Отправить сообщение
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2} className="space-y-10">
            <div>
              <h2 className="font-heading text-3xl font-light text-[var(--cream)] mb-8">Наш адрес</h2>
              <div className="rounded-2xl border border-[var(--border)] overflow-hidden"
                style={{ background: "var(--bg-card)" }}>
                {[
                  { label: "Адрес",          value: "Москва, ул. Тверская, 12, офис 301" },
                  { label: "Телефон",        value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
                  { label: "Email",          value: "hello@aurum.ru", href: "mailto:hello@aurum.ru" },
                  { label: "Режим работы",   value: "Пн–Сб: 10:00 – 20:00" },
                ].map(({ label, value, href }, i, arr) => (
                  <div key={label}
                    className={`flex flex-col gap-1 px-6 py-4 transition-colors duration-300 hover:bg-[var(--bg-card2)] ${i < arr.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                    <span className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">{label}</span>
                    {href ? (
                      <a href={href} className="text-sm text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
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
                {["Instagram", "Pinterest", "Telegram", "VK"].map((name) => (
                  <a key={name} href="#"
                    className="social-icon text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 border border-[var(--border)] rounded-2xl transition-all duration-300 hover:border-[var(--gold)]/30"
              style={{ background: "var(--bg-card)" }}>
              <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-3">Индивидуальный заказ</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Создаём украшения по вашим эскизам и идеям. Свяжитесь с нами для обсуждения деталей — воплотим любую мечту.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
