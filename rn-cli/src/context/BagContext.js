import React, { createContext, useMemo, useState } from 'react';

export const BagContext = createContext({
  items: [],
  addToBag: () => {},
  removeFromBag: () => {},
  clearBag: () => {},
});

export function BagProvider({ children }) {
  const [items, setItems] = useState([]);

  const value = useMemo(() => ({
    items,
    addToBag: (product) => setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    }),
    removeFromBag: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
    clearBag: () => setItems([]),
  }), [items]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}
