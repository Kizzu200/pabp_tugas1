import { getProductById } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCartButton from './AddToCartButton';
import { formatToRupiah } from '@/lib/currency';

// SSR: Server-Side Rendering
// Data di-fetch setiap kali halaman diminta (selalu fresh)
export const dynamic = 'force-dynamic';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  try {
    // SSR: Fetch fresh data dari server setiap request
    const product = await getProductById(params.id);

    if (!product) {
      notFound();
    }

    const discountedPrice = product.price - (product.price * product.discountPercentage / 100);

    return (
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-primary hover:underline">Beranda</Link>
          <span className="mx-2">›</span>
          <Link href="/products" className="text-primary hover:underline">Produk</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-600">{product.title}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Images */}
            <div>
              <div className="relative h-96 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0] || product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-lg font-bold">
                    -{Math.round(product.discountPercentage)}%
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative h-20 rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200 hover:border-primary cursor-pointer">
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-2">
                  Brand: <span className="font-semibold text-gray-700">{product.brand}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 text-xl">⭐</span>
                    <span className="text-lg font-semibold">{product.rating}</span>
                    <span className="text-gray-500">/5</span>
                  </div>
                  <div className="text-gray-500">
                    Kategori: <span className="font-semibold capitalize">{product.category}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-baseline space-x-3">
                  {product.discountPercentage > 0 ? (
                    <>
                      <span className="text-4xl font-bold text-primary">
                        {formatToRupiah(discountedPrice)}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {formatToRupiah(product.price)}
                      </span>
                      <span className="text-green-600 font-semibold">
                        Hemat {formatToRupiah(product.price - discountedPrice)}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-primary">
                      {formatToRupiah(product.price)}
                    </span>
                  )}
                </div>
              </div>

              {/* Stock */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gray-700 font-semibold">Stok:</span>
                  <span className={`font-bold ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                    {product.stock > 10 ? `${product.stock} tersedia` : `Hanya ${product.stock} tersisa!`}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Deskripsi Produk</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart - Client Component */}
              <AddToCartButton product={product} />

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Gratis ongkir untuk pembelian diatas Rp750.000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Garansi 30 hari pengembalian</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Produk original 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link href="/products" className="btn-secondary">
            ← Kembali ke Katalog Produk
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Produk Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-6">
          Produk yang Anda cari tidak tersedia.
        </p>
        <Link href="/products" className="btn-primary">
          Lihat Produk Lainnya
        </Link>
      </div>
    );
  }
}
