import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Selamat Datang di ZiyaStore! 
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Platform e-commerce modern yang dibangun dengan Next.js,
          mendemonstrasikan SSR, SSG, dan CSR untuk pengalaman berbelanja terbaik
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card text-center">
          <div className="text-4xl mb-4"></div>
          <h3 className="text-xl font-bold mb-2">SSG - Static Site Generation</h3>
          <p className="text-gray-600">
            Halaman produk di-generate saat build time untuk performa maksimal
          </p>
        </div>
        
        <div className="card text-center">
          <div className="text-4xl mb-4"></div>
          <h3 className="text-xl font-bold mb-2">SSR - Server-Side Rendering</h3>
          <p className="text-gray-600">
            Detail produk selalu fresh dengan data terbaru dari server
          </p>
        </div>
        
        <div className="card text-center">
          <div className="text-4xl mb-4"></div>
          <h3 className="text-xl font-bold mb-2">CSR - Client-Side Rendering</h3>
          <p className="text-gray-600">
            Keranjang belanja interaktif dengan state management real-time
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Teknologi yang Digunakan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2"></div>
            <p className="font-semibold">Next.js 14</p>
            <p className="text-sm text-gray-600">App Router</p>
          </div>
          <div>
            <div className="text-3xl mb-2"></div>
            <p className="font-semibold">Tailwind CSS</p>
            <p className="text-sm text-gray-600">Styling</p>
          </div>
          <div>
            <div className="text-3xl mb-2"></div>
            <p className="font-semibold">TypeScript</p>
            <p className="text-sm text-gray-600">Type Safety</p>
          </div>
          <div>
            <div className="text-3xl mb-2"></div>
            <p className="font-semibold">DummyJSON API</p>
            <p className="text-sm text-gray-600">Data Source</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Berbelanja?</h2>
          <p className="text-lg mb-6">
            Jelajahi koleksi produk kami dan mulai belanja sekarang!
          </p>
          <Link href="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Lihat Semua Produk
          </Link>
        </div>
      </section>
    </div>
  );
}
