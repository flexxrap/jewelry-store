import Link from "next/link";
import Image from "next/image";
import { products, formatPrice, categoryLabels } from "@/lib/products";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

const featuredProducts = products.filter((p) => p.featured);

const collections = [
  {
    title: "Кольца",
    subtitle: "Символы любви",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=80",
    href: "/catalog?category=rings",
  },
  {
    title: "Серьги",
    subtitle: "Грация и утончённость",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=80",
    href: "/catalog?category=earrings",
  },
  {
    title: "Браслеты",
    subtitle: "Тонкие детали",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94f4cf8?w=700&q=80",
    href: "/catalog?category=bracelets",
  },
];

const advantages = [
  { icon: "✦", title: "Ручная работа", desc: "Каждое украшение создаётся вручную опытными мастерами с многолетней практикой" },
  { icon: "◈", title: "Сертификаты", desc: "Все изделия сопровождаются пробирными клеймами и геммологическими сертификатами" },
  { icon: "◇", title: "Доставка", desc: "Бесплатная доставка по Москве и бережная упаковка для отправки по России" },
  { icon: "◉", title: "Гарантия 2 года", desc: "Предоставляем гарантию на все изделия и бесплатный ремонт в течение срока" },
];

const testimonials = [
  {
    name: "Анна Соколова",
    text: "Заказывала кольцо «Вечность» на годовщину — получила нечто большее, чем ожидала. Качество изумительное, упаковка словно из бутика высокой моды.",
    date: "Март 2024",
  },
  {
    name: "Михаил Ершов",
    text: "Брал колье в подарок жене. Мастера помогли с выбором, объяснили каждую деталь. Жена в восторге — носит каждый день.",
    date: "Январь 2024",
  },
  {
    name: "Екатерина Лебедева",
    text: "Покупаю здесь уже третий раз. Здесь чувствуется настоящая страсть к ювелирному делу. Браслет «Шарм» просто волшебный.",
    date: "Апрель 2024",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Collections */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Ассортимент</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Наши коллекции</h2>
          <div className="gold-line mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <AnimatedSection key={col.title} delay={i * 0.12}>
              <Link href={col.href} className="group collection-card block relative aspect-[3/4] cursor-pointer">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292528]/90 via-[#292528]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">{col.subtitle}</p>
                  <h3 className="font-heading text-4xl font-light text-[var(--cream)]">{col.title}</h3>
                  <div className="collection-underline mt-4" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-28" style={{ background: "var(--bg-card)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection y={30}>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                alt="О нас"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)" }} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.18} y={30}>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">О бренде</p>
            <h2 className="font-heading text-5xl font-light text-[var(--cream)] leading-tight mb-6">
              Мастерство,<br />проверенное временем
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              Ювелирный дом Aurum основан в 2010 году. За эти годы мы создали тысячи уникальных украшений, каждое из которых несёт в себе частицу души мастера и историю своего владельца.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-10">
              Мы работаем только с сертифицированными металлами и камнями, соблюдая традиции ювелирного ремесла и воплощая современные эстетические идеалы.
            </p>
            <Link href="/contacts" className="btn-gold">
              Связаться с нами
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why us */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Преимущества</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Почему мы</h2>
          <div className="gold-line mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <div className="glass-card p-8 text-center h-full">
                <div className="text-3xl text-[var(--gold)] mb-4">{a.icon}</div>
                <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-3">{a.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="py-28" style={{ background: "var(--bg-card2)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Избранное</p>
            <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Хиты коллекции</h2>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-14" delay={0.2}>
            <Link href="/catalog" className="btn-gold">
              Весь каталог
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Отзывы</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Наши клиенты</h2>
          <div className="gold-line mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="glass-card p-8 flex flex-col gap-6 h-full">
                <div className="font-heading text-5xl text-[var(--gold)] opacity-30">&ldquo;</div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed italic flex-1">{t.text}</p>
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="text-sm text-[var(--cream)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{t.date}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
