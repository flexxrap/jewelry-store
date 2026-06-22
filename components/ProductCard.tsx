"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type Product, formatPrice, categoryLabels, metalLabels } from "@/lib/products";

interface Props {
  product: Product;
  index?: number;
  showMetal?: boolean;
}

export default function ProductCard({ product, index = 0, showMetal = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="product-card">
          <div className="relative aspect-square product-img-wrap img-glow bg-[var(--bg-card)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292528]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-[20px]" />
            <div className="absolute top-3 right-3">
              <span className="text-[10px] tracking-[0.18em] uppercase bg-[var(--gold)] text-[#1a1618] px-3 py-1 rounded-full opacity-0 transition-opacity duration-300 product-badge">
                Подробнее
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1">
              {categoryLabels[product.category]}{showMetal ? ` · ${metalLabels[product.metal]}` : ""}
            </p>
            <h3 className="font-heading text-xl font-light text-[var(--cream)] mb-1 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
