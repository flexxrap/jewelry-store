"use client";

import { useState, useMemo } from "react";
import { products, formatPrice, categoryLabels, metalLabels, type Product } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

const PRICE_MAX = 70000;

export default function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<Set<Product["category"]>>(new Set());
  const [selectedMetals, setSelectedMetals] = useState<Set<Product["metal"]>>(new Set());
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);

  const toggle = <T extends string>(set: Set<T>, val: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    setter(next);
  };

  const filtered = useMemo(() => products.filter((p) => {
    if (selectedCategories.size > 0 && !selectedCategories.has(p.category)) return false;
    if (selectedMetals.size > 0 && !selectedMetals.has(p.metal)) return false;
    if (p.price > maxPrice) return false;
    return true;
  }), [selectedCategories, selectedMetals, maxPrice]);

  const categories = Object.keys(categoryLabels) as Product["category"][];
  const metals = Object.keys(metalLabels) as Product["metal"][];
  const hasFilters = selectedCategories.size > 0 || selectedMetals.size > 0 || maxPrice < PRICE_MAX;

  const CheckBox = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
    <div
      onClick={onClick}
      className="w-4 h-4 border rounded-sm flex items-center justify-center cursor-pointer transition-all duration-300"
      style={{
        borderColor: active ? "var(--gold)" : "var(--border)",
        background: active ? "var(--gold)" : "transparent",
      }}
    >
      {active && (
        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#1a1618" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Магазин</p>
          <h1 className="font-heading text-5xl font-light text-[var(--cream)]">Каталог украшений</h1>
          <div className="gold-line mt-6" />
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters sidebar */}
          <aside className="lg:w-60 shrink-0">
            <div className="sticky top-28 space-y-8 rounded-2xl border border-[var(--border)] p-6"
              style={{ background: "var(--bg-card)" }}>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Тип украшения</h3>
                <div className="space-y-3">
                  {categories.map((c) => (
                    <label key={c} className="flex items-center gap-3 cursor-pointer group">
                      <CheckBox active={selectedCategories.has(c)} onClick={() => toggle(selectedCategories, c, setSelectedCategories)} />
                      <span
                        onClick={() => toggle(selectedCategories, c, setSelectedCategories)}
                        className="text-sm text-[var(--text-muted)] group-hover:text-[var(--cream)] transition-colors duration-300 cursor-pointer"
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
                      <CheckBox active={selectedMetals.has(m)} onClick={() => toggle(selectedMetals, m, setSelectedMetals)} />
                      <span
                        onClick={() => toggle(selectedMetals, m, setSelectedMetals)}
                        className="text-sm text-[var(--text-muted)] group-hover:text-[var(--cream)] transition-colors duration-300 cursor-pointer"
                      >
                        {metalLabels[m]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-1">Цена</h3>
                <p className="text-xs text-[var(--text-muted)] mb-4">до {formatPrice(maxPrice)}</p>
                <input
                  type="range"
                  min={10000}
                  max={PRICE_MAX}
                  step={1000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: "var(--gold)" }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-[var(--text-muted)]">10 000 ₽</span>
                  <span className="text-xs text-[var(--text-muted)]">70 000 ₽</span>
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={() => { setSelectedCategories(new Set()); setSelectedMetals(new Set()); setMaxPrice(PRICE_MAX); }}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
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
                <p className="font-heading text-3xl text-[var(--text-muted)] font-light">Ничего не найдено</p>
                <p className="text-sm text-[var(--text-muted)] mt-3">Попробуйте изменить фильтры</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} showMetal />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
