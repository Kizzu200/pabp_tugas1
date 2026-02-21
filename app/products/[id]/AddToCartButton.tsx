'use client';

import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
        >
          −
        </button>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
          className="w-16 text-center border border-gray-300 rounded-lg py-2"
        />
        <button
          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
          className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
        >
          +
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`flex-1 btn-primary py-3 text-lg ${isAdding ? 'bg-green-500' : ''}`}
      >
        {isAdding ? 'Berhasil Ditambahkan!' : 'Tambah ke Keranjang'}
      </button>
    </div>
  );
}
