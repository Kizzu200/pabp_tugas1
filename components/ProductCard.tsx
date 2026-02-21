'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { formatToRupiah } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product);
    
    // Reset animation after 1 second
    setTimeout(() => setIsAdding(false), 1000);
  };

  const discountedPrice = product.price - (product.price * product.discountPercentage / 100);

  return (
    <div className="card group">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition">
            {product.title}
          </h3>
          
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.stock} stok)</span>
          </div>

          <div className="flex items-baseline space-x-2">
            {product.discountPercentage > 0 ? (
              <>
                <span className="text-xl font-bold text-primary">
                  {formatToRupiah(discountedPrice)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatToRupiah(product.price)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-primary">
                {formatToRupiah(product.price)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full mt-4 btn-primary ${isAdding ? 'bg-green-500' : ''}`}
      >
        {isAdding ? '✓ Ditambahkan!' : '+ Keranjang'}
      </button>
    </div>
  );
}
