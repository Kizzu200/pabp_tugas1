'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { formatToRupiah } from '@/lib/currency';

export default function CartPage() {
  // CSR: Client-Side Rendering dengan State Management
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 50 ? 0 : 10;
  const finalTotal = totalPrice + shippingCost;

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    setTimeout(() => {
      setShowCheckoutModal(false);
      clearCart();
      alert('Terima kasih! Pesanan Anda telah berhasil diproses. ');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <div className="text-8xl mb-6"></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Keranjang Belanja Kosong
          </h1>
          <p className="text-gray-600 mb-8">
            Belum ada produk di keranjang Anda. Mari mulai berbelanja!
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Mulai Belanja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Keranjang Belanja 
      </h1>
      <p className="text-gray-600 mb-8">
        Halaman ini menggunakan <span className="font-semibold text-secondary">CSR (Client-Side Rendering)</span> dengan Context API
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const discountedPrice = item.product.price - (item.product.price * item.product.discountPercentage / 100);
            const itemTotal = discountedPrice * item.quantity;

            return (
              <div key={item.product.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link 
                      href={`/products/${item.product.id}`}
                      className="font-semibold text-gray-800 hover:text-primary line-clamp-2"
                    >
                      {item.product.title}
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">
                      Brand: {item.product.brand}
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg font-bold text-primary">
                        {formatToRupiah(discountedPrice)}
                      </span>
                      {item.product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatToRupiah(item.product.price)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Hapus
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 font-bold"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 font-bold disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-lg font-bold text-gray-800">
                      {formatToRupiah(itemTotal)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Clear Cart Button */}
          <button
            onClick={() => {
              if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
                clearCart();
              }
            }}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Kosongkan Keranjang
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ringkasan Pesanan
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} item)</span>
                <span className="font-semibold">{formatToRupiah(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ongkos Kirim</span>
                <span className="font-semibold">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">GRATIS</span>
                  ) : (
                    formatToRupiah(shippingCost)
                  )}
                </span>
              </div>
              {shippingCost > 0 && (
                <p className="text-xs text-gray-500">
                   Gratis ongkir untuk pembelian diatas Rp750.000
                </p>
              )}
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">{formatToRupiah(finalTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full btn-primary py-3 text-lg"
            >
              Checkout Sekarang
            </button>

            <Link href="/products" className="block text-center mt-4 text-primary hover:underline">
              ← Lanjut Belanja
            </Link>

            {/* Benefits */}
            <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Pembayaran aman</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Pengiriman cepat</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Garansi 30 hari</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSR Info Banner */}
      <div className="mt-12 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="font-bold text-purple-800 mb-2"> Catatan Teknis - CSR</h3>
        <p className="text-purple-700 text-sm">
          Halaman keranjang belanja ini menggunakan <strong>CSR (Client-Side Rendering)</strong> dengan 
          <strong> React Context API</strong> untuk state management global. 
          Semua operasi (tambah, kurang, hapus item) dilakukan di sisi client menggunakan React hooks (useState, useContext). 
          Data keranjang di-persist ke <strong>localStorage</strong> untuk menjaga data tetap ada meskipun browser di-refresh.
          Ini memberikan pengalaman pengguna yang sangat interaktif dan responsif.
        </p>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-6xl mb-4 animate-bounce">✓</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Memproses Pesanan...
            </h3>
            <p className="text-gray-600">Mohon tunggu sebentar</p>
          </div>
        </div>
      )}
    </div>
  );
}
