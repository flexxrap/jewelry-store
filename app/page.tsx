import Link from "next/link";
import Image from "next/image";
import { products, formatPrice, categoryLabels } from "@/lib/products";

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
  {
    icon: "✦",
    title: "Ручная работа",
    desc: "Каждое украшение создаётся вручную опытными мастерами с многолетней практикой",
  },
  {
    icon: "◈",
    title: "Сертификаты",
    desc: "Все изделия сопровождаются пробирными клеймами и геммологическими сертификатами",
  },
  {
    icon: "◇",
    title: "Доставка",
    desc: "Бесплатная доставка по Москве и бережная упаковка для отправки по России",
  },
  {
    icon: "◉",
    title: "Гарантия 2 года",
    desc: "Предоставляем гарантию на все изделия и бесплатный ремонт в течение срока",
  },
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
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90"
            alt="Украшения ручной работы"
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Ювелирный дом</p>
          <h1 className="font-heading text-6xl md:text-8xl font-light text-[var(--cream)] leading-tight mb-6">
            Украшения<br />
            <em className="not-italic text-[var(--gold)]">ручной работы</em>
          </h1>
          <div className="gold-line mx-auto my-8" />
          <p className="text-sm text-[var(--text-muted)] tracking-widest leading-relaxed mb-10 max-w-md mx-auto">
            Каждое изделие — уникальное произведение искусства, созданное с любовью и безупречным мастерством
          </p>
          <Link href="/catalog" className="btn-gold">
            Смотреть коллекцию
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Ассортимент</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Наши коллекции</h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link key={col.title} href={col.href} className="group relative overflow-hidden aspect-[3/4] block">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">{col.subtitle}</p>
                <h3 className="font-heading text-4xl font-light text-[var(--cream)]">{col.title}</h3>
                <div className="mt-4 h-px w-0 group-hover:w-full bg-[var(--gold)] transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="О нас"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--gold)] pointer-events-none" />
          </div>
          <div>
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
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Преимущества</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Почему мы</h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((a) => (
            <div key={a.title} className="group p-8 border border-[var(--border)] hover:border-[var(--gold)]/40 transition-colors duration-300 text-center">
              <div className="text-3xl text-[var(--gold)] mb-4">{a.icon}</div>
              <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-3">{a.title}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[var(--bg-card2)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Избранное</p>
            <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Хиты коллекции</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group">
                <div className="relative overflow-hidden aspect-square bg-[var(--bg-card)] mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1">
                  {categoryLabels[p.category]}
                </p>
                <h3 className="font-heading text-2xl font-light text-[var(--cream)] mb-1">{p.name}</h3>
                <p className="text-sm text-[var(--text-muted)]">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/catalog" className="btn-gold">
              Весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Отзывы</p>
          <h2 className="font-heading text-5xl font-light text-[var(--cream)]">Наши клиенты</h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 border border-[var(--border)] flex flex-col gap-6">
              <div className="font-heading text-5xl text-[var(--gold)]/30">&ldquo;</div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed italic flex-1">{t.text}</p>
              <div className="border-t border-[var(--border)] pt-4">
                <p className="text-sm text-[var(--cream)]">{t.name}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
