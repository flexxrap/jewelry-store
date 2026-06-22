"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, formatPrice, categoryLabels, metalLabels, type Product } from "@/lib/products";

const PRICE_MAX = 70000;

export default function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<Set<Product["category"]>>(new Set());
  const [selectedMetals, setSelectedMetals] = useState<Set<Product["metal"]>>(new Set());
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);

  const toggleCategory = (c: Product["category"]) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });
  };

  const toggleMetal = (m: Product["metal"]) => {
    setSelectedMetals((prev) => {
      const next = new Set(prev);
      next.has(m) ? next.delete(m) : next.add(m);
      return next;
    });
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategories.size > 0 && !selectedCategories.has(p.category)) return false;
      if (selectedMetals.size > 0 && !selectedMetals.has(p.metal)) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
  }, [selectedCategories, selectedMetals, maxPrice]);

  const categories = Object.keys(categoryLabels) as Product["category"][];
  const metals = Object.keys(metalLabels) as Product["metal"][];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Магазин</p>
          <h1 className="font-heading text-5xl font-light text-[var(--cream)]">Каталог украшений</h1>
          <div className="gold-line mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Тип украшения</h3>
                <div className="space-y-3">
                  {categories.map((c) => (
                    <label key={c} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => toggleCategory(c)}
                        className={`w-4 h-4 border transition-colors cursor-pointer flex items-center justify-center ${
                          selectedCategories.has(c)
                            ? "border-[var(--gold)] bg-[var(--gold)]"
                            : "border-[var(--border)] group-hover:border-[var(--gold)]/50"
                        }`}
                      >
                        {selectedCategories.has(c) && (
                          <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        onClick={() => toggleCategory(c)}
                        className="text-sm text-[var(--text-muted)] group-hover:text-[var(--cream)] transition-colors"
                      >
                        {categoryLabels[c]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Металл</h3>
                <div className="space-y-3">
                  {metals.map((m) => (
                    <label key={m} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => toggleMetal(m)}
                        className={`w-4 h-4 border transition-colors cursor-pointer flex items-center justify-center ${
                          selectedMetals.has(m)
                            ? "border-[var(--gold)] bg-[var(--gold)]"
                            : "border-[var(--border)] group-hover:border-[var(--gold)]/50"
                        }`}
                      >
                        {selectedMetals.has(m) && (
                          <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        onClick={() => toggleMetal(m)}
                        className="text-sm text-[var(--text-muted)] group-hover:text-[var(--cream)] transition-colors"
                      >
                        {metalLabels[m]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">
                  Цена до {formatPrice(maxPrice)}
                </h3>
                <input
                  type="range"
                  min={10000}
                  max={PRICE_MAX}
                  step={1000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[var(--gold)]"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-[var(--text-muted)]">10 000 ₽</span>
                  <span className="text-xs text-[var(--text-muted)]">70 000 ₽</span>
                </div>
              </div>

              {(selectedCategories.size > 0 || selectedMetals.size > 0 || maxPrice < PRICE_MAX) && (
                <button
                  onClick={() => {
                    setSelectedCategories(new Set());
                    setSelectedMetals(new Set());
                    setMaxPrice(PRICE_MAX);
                  }}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <p className="text-xs text-[var(--text-muted)] mb-8 tracking-widest">
              Найдено: {filtered.length} украшений
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-heading text-3xl text-[var(--text-muted)] font-light">
                  Ничего не найдено
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-3">Попробуйте изменить фильтры</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((p) => (
                  <Link key={p.id} href={`/product/${p.id}`} className="group">
                    <div className="relative overflow-hidden aspect-square bg-[var(--bg-card)] mb-4">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] tracking-[0.15em] uppercase bg-[var(--gold)] text-black px-3 py-1">
                          Подробнее
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1">
                      {categoryLabels[p.category]} · {metalLabels[p.metal]}
                    </p>
                    <h3 className="font-heading text-xl font-light text-[var(--cream)] mb-1 group-hover:text-[var(--gold)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{formatPrice(p.price)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
