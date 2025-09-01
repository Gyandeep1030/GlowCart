import productsLocal from '../data/products.json';

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));
}

export async function fetchProducts() {
  try {
    const res = await Promise.race([
      fetch('https://dummyjson.com/products?limit=100', { headers: { accept: 'application/json' } }),
      timeout(5000),
    ]);
    if (!res || !res.ok) throw new Error('network');
    const data = await res.json();
    const products = data.products || [];
    const filtered = products.filter((p) => {
      const text = `${p.title} ${p.description}`.toLowerCase();
      return text.includes('mascara') || text.includes('lip') || text.includes('cream') || text.includes('beauty') || p.category === 'beauty';
    });
    return filtered.length ? filtered : productsLocal;
  } catch (e) {
    return productsLocal;
  }
}

export async function fetchProduct(id) {
  try {
    const res = await Promise.race([
      fetch(`https://dummyjson.com/products/${id}`, { headers: { accept: 'application/json' } }),
      timeout(5000),
    ]);
    if (!res || !res.ok) throw new Error('network');
    return await res.json();
  } catch (e) {
    return productsLocal.find((p) => String(p.id) === String(id));
  }
}
