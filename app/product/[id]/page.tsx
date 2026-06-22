import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, formatPrice, categoryLabels, metalLabels } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

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

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 mb-12 text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--gold)] transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[var(--gold)] transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-[var(--cream)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[var(--bg-card)] overflow-hidden">
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
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-square bg-[var(--bg-card)] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 2}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity cursor-pointer"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:py-4">
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

            <div className="space-y-3 mb-10 text-sm">
              <div className="flex justify-between py-3 border-b border-[var(--border)]">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">Тип</span>
                <span className="text-[var(--cream)]">{categoryLabels[product.category]}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[var(--border)]">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">Металл</span>
                <span className="text-[var(--cream)]">{metalLabels[product.metal]}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[var(--border)]">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">Производство</span>
                <span className="text-[var(--cream)]">Ручная работа</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[var(--border)]">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">Гарантия</span>
                <span className="text-[var(--cream)]">2 года</span>
              </div>
            </div>

            <AddToCartButton name={product.name} />

            <p className="text-xs text-[var(--text-muted)] mt-4 tracking-widest">
              Бесплатная доставка · Сертификат качества · Подарочная упаковка
            </p>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Смотрите также</p>
              <h2 className="font-heading text-4xl font-light text-[var(--cream)]">Похожие украшения</h2>
              <div className="gold-line mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p) => (
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
                  <h3 className="font-heading text-xl font-light text-[var(--cream)] mb-1">{p.name}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
