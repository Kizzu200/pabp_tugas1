import { getAllProducts } from '@/lib/api';
import ProductsClient from './ProductsClient';

// SSG: Static Site Generation
// Halaman ini di-generate saat build time
export const revalidate = 3600; // Revalidate setiap 1 jam (ISR)

export default async function ProductsPage() {
  try {
    // Fetch data saat build time
    const data = await getAllProducts();
    
    return <ProductsClient initialProducts={data.products} />;
  } catch (error) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Gagal Memuat Produk
        </h2>
        <p className="text-gray-600">
          Terjadi kesalahan saat mengambil data produk.
        </p>
      </div>
    );
  }
}
