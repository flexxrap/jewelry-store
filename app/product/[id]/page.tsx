import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, formatPrice, categoryLabels, metalLabels } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const specs = [
    { label: "Тип",          value: categoryLabels[product.category] },
    { label: "Металл",       value: metalLabels[product.metal] },
    { label: "Производство", value: "Ручная работа" },
    { label: "Гарантия",     value: "2 года" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 mb-12 text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">Каталог</Link>
          <span>/</span>
          <span className="text-[var(--cream)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <AnimatedSection y={20}>
            <div className="relative aspect-square rounded-2xl overflow-hidden img-glow"
              style={{ background: "var(--bg-card)" }}>
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                    style={{ background: "var(--bg-card)" }}>
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 2}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.15} y={20} className="lg:py-4">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
              {categoryLabels[product.category]} · {metalLabels[product.metal]}
            </p>
            <h1 className="font-heading text-5xl font-light text-[var(--cream)] leading-tight mb-4">
              {product.name}
            </h1>
            <div className="gold-line mb-8" />

            <p className="font-heading text-4xl text-[var(--gold)] mb-8 font-light">
              {formatPrice(product.price)}
            </p>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="space-y-0 mb-10 rounded-2xl overflow-hidden border border-[var(--border)]">
              {specs.map(({ label, value }, i) => (
                <div key={label} className={`flex justify-between px-5 py-3.5 text-sm transition-colors duration-300 hover:bg-[var(--bg-card)] ${i < specs.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                  <span className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">{label}</span>
                  <span className="text-[var(--cream)]">{value}</span>
                </div>
              ))}
            </div>

            <AddToCartButton name={product.name} />

            <p className="text-xs text-[var(--text-muted)] mt-4 tracking-widest text-center">
              Бесплатная доставка · Сертификат качества · Подарочная упаковка
            </p>
          </AnimatedSection>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-28">
            <AnimatedSection className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Смотрите также</p>
              <h2 className="font-heading text-4xl font-light text-[var(--cream)]">Похожие украшения</h2>
              <div className="gold-line mt-4" />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
