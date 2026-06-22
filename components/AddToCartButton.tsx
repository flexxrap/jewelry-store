"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCartButton({ name }: { name: string }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      className="relative w-full py-4 overflow-hidden rounded-sm cursor-pointer"
      style={{
        border: "1px solid var(--gold)",
        fontFamily: "var(--font-inter)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        background: added ? "var(--gold-light)" : "var(--gold)",
        color: "#1a1618",
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        boxShadow: added ? "0 0 28px rgba(212,175,55,0.5)" : "0 0 0 rgba(212,175,55,0)",
      }}
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            ✓ Добавлено в корзину
          </motion.span>
        ) : (
          <motion.span
            key="default"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            Добавить в корзину
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
