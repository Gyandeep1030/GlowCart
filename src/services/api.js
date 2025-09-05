const BASE = 'https://dummyjson.com';
import localProducts from '../data/products.json';

function timeout(ms) { return new Promise((_, r) => setTimeout(() => r(new Error('timeout')), ms)); }

export async function fetchProducts() {
  try {
    const res = await Promise.race([
      fetch(`${BASE}/products?limit=100`, { headers: { accept: 'application/json' } }),
      timeout(5000),
    ]);
    if (!res || !res.ok) throw new Error('network');
    const data = await res.json();
    const products = data.products || [];
    const filtered = products.filter((p) => {
      const t = `${p.title} ${p.description}`.toLowerCase();
      return t.includes('mascara') || t.includes('lip') || t.includes('cream') || t.includes('beauty') || p.category === 'beauty';
    });
    return filtered.length ? filtered : localProducts;
  } catch (e) {
    return localProducts;
  }
}

export async function fetchProduct(id) {
  try {
    const res = await Promise.race([
      fetch(`${BASE}/products/${id}`, { headers: { accept: 'application/json' } }),
      timeout(5000),
    ]);
    if (!res || !res.ok) throw new Error('network');
    return await res.json();
  } catch (e) {
    return localProducts.find((p) => String(p.id) === String(id));
  }
}
