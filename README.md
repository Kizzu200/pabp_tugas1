# ZiyaStore - Aplikasi E-Commerce Next.js

Aplikasi e-commerce modern yang dibangun dengan Next.js 14, mendemonstrasikan implementasi SSR (Server-Side Rendering), SSG (Static Site Generation), dan CSR (Client-Side Rendering).

## 📋 Deskripsi Proyek

Proyek ini dibuat untuk memenuhi **Tugas 1 - Pengembangan Aplikasi Berbasis Platform** dengan implementasi lengkap tiga teknik rendering utama dalam Next.js.

### 🎯 Fitur Utama

1. **Halaman Produk (SSG)** - Katalog produk dengan Static Site Generation
2. **Detail Produk (SSR)** - Informasi produk real-time dengan Server-Side Rendering  
3. **Keranjang Belanja (CSR)** - Manajemen keranjang interaktif dengan Client-Side Rendering
4. **Responsive Design** - Tampilan optimal di semua ukuran layar
5. **Loading States** - Indikator loading untuk pengalaman pengguna yang baik
6. **Error Handling** - Penanganan error yang informatif

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Source**: DummyJSON API
- **Image Optimization**: Next.js Image Component

## 📂 Struktur Proyek

```
tugas1-pabp-nextjs/
├── app/
│   ├── layout.tsx              # Root layout dengan CartProvider
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── products/
│   │   ├── page.tsx            # Product list page (SSG)
│   │   ├── ProductsClient.tsx  # Client component untuk filter (CSR)
│   │   ├── loading.tsx         # Loading state
│   │   └── [id]/
│   │       ├── page.tsx        # Product detail page (SSR)
│   │       ├── AddToCartButton.tsx  # Client component
│   │       └── loading.tsx     # Loading state
│   └── cart/
│       └── page.tsx            # Shopping cart page (CSR)
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── ProductCard.tsx         # Product card component
│   ├── LoadingSpinner.tsx      # Loading indicator
│   └── ErrorMessage.tsx        # Error display component
├── contexts/
│   └── CartContext.tsx         # Global cart state management
├── lib/
│   └── api.ts                  # API utility functions
├── types/
│   └── product.ts              # TypeScript interfaces
└── public/                     # Static assets
```

## 🚀 Cara Menjalankan Proyek

### Prerequisites

- Node.js 18.x atau lebih baru
- npm atau yarn

### Instalasi

1. **Clone atau download repository ini**

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```

4. **Buka browser**
```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 📖 Penjelasan Teknik Rendering

### 1. SSG (Static Site Generation) - Halaman Produk

**Lokasi**: `app/products/page.tsx`

**Cara Kerja**:
- Data produk di-fetch saat **build time**
- Halaman di-generate sebagai HTML statis
- Sangat cepat karena tidak perlu fetching saat runtime
- Cocok untuk data yang tidak sering berubah

**Kode Kunci**:
```typescript
export const revalidate = 3600; // ISR: Revalidate setiap 1 jam

export default async function ProductsPage() {
  const data = await getAllProducts(); // Fetch saat build
  return <ProductsClient initialProducts={data.products} />;
}
```

**Keuntungan**:
- ⚡ Loading sangat cepat
- 🔍 SEO-friendly
- 📊 Performa optimal
- 💰 Hemat server resources

### 2. SSR (Server-Side Rendering) - Detail Produk

**Lokasi**: `app/products/[id]/page.tsx`

**Cara Kerja**:
- Data di-fetch setiap kali ada request
- HTML di-generate di server untuk setiap request
- Data selalu fresh dan up-to-date
- Cocok untuk data yang sering berubah (harga, stok, rating)

**Kode Kunci**:
```typescript
export const dynamic = 'force-dynamic'; // Force SSR

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(params.id); // Fetch setiap request
  return <ProductDetail product={product} />;
}
```

**Keuntungan**:
- 🔄 Data selalu terbaru
- 🔍 SEO-friendly
- 📱 Cocok untuk data dinamis
- 🎯 Personalisasi konten

### 3. CSR (Client-Side Rendering) - Keranjang Belanja

**Lokasi**: `app/cart/page.tsx` dan `contexts/CartContext.tsx`

**Cara Kerja**:
- Komponen render di browser
- State di-manage dengan React hooks (useState, useContext)
- Data di-persist ke localStorage
- Interaksi user sangat responsif tanpa reload

**Kode Kunci**:
```typescript
'use client';

export function CartProvider({ children }: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('shopping-cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(items));
  }, [items]);
  
  return <CartContext.Provider value={{...}}>{children}</CartContext.Provider>;
}
```

**Keuntungan**:
- ⚡ Interaksi sangat cepat
- 💾 Data persist di browser
- 🎨 UX yang smooth
- 🔄 Real-time updates

## 🎨 Fitur Tambahan

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid layout yang adaptif
- Mobile menu untuk navigasi

### Loading States
- Skeleton screens untuk loading
- Loading spinners
- Smooth transitions

### Error Handling
- Try-catch blocks
- User-friendly error messages
- Retry mechanisms
- Fallback UI

## 📱 Fitur CSR yang Diimplementasikan

1. **Filter & Search** (ProductsClient.tsx)
   - Pencarian real-time
   - Filter berdasarkan kategori
   - Sorting (harga, nama, rating)
   - Semua dilakukan di client tanpa reload

2. **Shopping Cart** (CartContext.tsx)
   - Tambah/kurang quantity
   - Hapus item
   - Kosongkan keranjang
   - Persist ke localStorage
   - Real-time total calculation

## 🔗 API Integration

Menggunakan **DummyJSON API** (https://dummyjson.com):
- GET /products - List semua produk
- GET /products/{id} - Detail produk
- GET /products/categories - List kategori
- GET /products/category/{category} - Filter by category
- GET /products/search?q={query} - Search produk

## 📊 State Management

### Context API (Global State)
```typescript
// Struktur Context
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}
```

### Local Storage Persistence
- Cart data disimpan di browser
- Tetap ada setelah refresh
- Cross-session persistence

## 🎥 Demo untuk Video Presentasi

### Poin-poin yang Bisa Dijelaskan (4-7 menit):

1. **Intro (30 detik)**
   - Pengenalan aplikasi
   - Teknologi yang digunakan

2. **SSG - Halaman Produk (1.5 menit)**
   - Buka halaman produk
   - Jelaskan SSG di info banner
   - Tunjukkan performa cepat
   - Demo filter & search (CSR)

3. **SSR - Detail Produk (1.5 menit)**
   - Klik salah satu produk
   - Jelaskan SSR di info banner
   - Tunjukkan data selalu fresh
   - Demo tambah ke keranjang

4. **CSR - Keranjang Belanja (2 menit)**
   - Buka halaman cart
   - Jelaskan CSR & Context API di info banner
   - Demo tambah/kurang quantity
   - Demo hapus item
   - Tunjukkan localStorage (buka DevTools)
   - Demo checkout

5. **Responsive Design (1 menit)**
   - Resize browser
   - Tunjukkan mobile view
   - Demo mobile menu

6. **Penutup (30 detik)**
   - Recap teknologi
   - Terima kasih

## Catatan Pengembangan

### Mengapa Memilih Arsitektur Ini?

1. **SSG untuk Katalog Produk**: 
   - Data produk tidak berubah terlalu sering
   - Performa loading sangat penting untuk list view
   - SEO penting untuk discoverability

2. **SSR untuk Detail Produk**:
   - Stok dan harga bisa berubah sewaktu-waktu
   - Perlu data terbaru untuk keputusan pembelian
   - SEO tetap optimal untuk product pages

3. **CSR untuk Keranjang**:
   - Interaksi user sangat frequent
   - Data bersifat personal (per-user)
   - Tidak perlu SEO (private page)
   - Optimal untuk UX

## 🚢 Deployment

### Recommended Platforms:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**

### Deploy ke Vercel:
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Proyek ini dibuat untuk tujuan akademik. Jika ingin berkontribusi atau menggunakan sebagai referensi, silakan fork repository ini.

## 📄 License

MIT License - Bebas digunakan untuk tujuan pembelajaran.

## 👨‍💻 Author

Dibuat untuk Tugas 1 - Pengembangan Aplikasi Berbasis Platform
Semester 4 - PABP

---

**Catatan**: Aplikasi ini dibuat dengan fokus pada demonstrasi teknik rendering (SSR, SSG, CSR) dalam Next.js. Untuk aplikasi production, pertimbangkan menambahkan:
- Authentication system
- Payment gateway integration
- Database integration
- Advanced error tracking
- Analytics
- Testing (Jest, React Testing Library)
#   p a b p _ t u g a s 1  
 