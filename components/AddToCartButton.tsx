"use client";

import { useState } from "react";

export default function AddToCartButton({ name }: { name: string }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-body ${
        added
          ? "bg-[var(--gold-light)] text-black border border-[var(--gold-light)]"
          : "btn-gold btn-gold-filled w-full"
      }`}
    >
      {added ? `✓ ${name} добавлено в корзину` : "Добавить в корзину"}
    </button>
  );
}
