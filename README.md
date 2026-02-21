# E-Commerce Next.js - Tugas 1 PABP

Aplikasi e-commerce sederhana yang dibangun dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**. Proyek ini mendemonstrasikan tiga teknik rendering utama: **SSG**, **SSR**, dan **CSR**.

## Fitur Utama

-**SSG (Static Site Generation)** - Katalog produk dengan performa tinggi
-**SSR (Server-Side Rendering)** - Detail produk dengan data real-time
-**CSR (Client-Side Rendering)** - Keranjang belanja interaktif
-**Dark Mode** - Toggle tema terang/gelap
-**Shopping Cart** - Sistem keranjang belanja lengkap
-**Multi Currency** - Support IDR, USD, EUR, dan lainnya
-**Responsive Design** - Mobile-friendly dengan Tailwind CSS
-**Fast Performance** - Optimasi dengan Next.js App Router

## Quick Start

### Prasyarat
- Node.js 18+ atau versi terbaru
- npm atau yarn

### Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/Kizzu200/pabp_tugas1.git
   cd pabp_tugas1
   ```

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

## Scripts

```bash
npm run dev      # Jalankan development server
npm run build    # Build aplikasi untuk production
npm run start    # Jalankan production server
npm run lint     # Jalankan ESLint
```

## Struktur Proyek

```
Tugas 1/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout dengan Context Providers
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles & Tailwind
│   ├── products/                # SSG - Katalog produk
│   │   ├── page.tsx            # List produk (Static)
│   │   ├── ProductsClient.tsx  # Client component untuk filter
│   │   ├── loading.tsx         # Loading state
│   │   └── [id]/               # SSR - Detail produk
│   │       ├── page.tsx        # Dynamic route (Server)
│   │       ├── AddToCartButton.tsx
│   │       └── loading.tsx
│   └── cart/                    # CSR - Keranjang belanja
│       └── page.tsx            # Cart page (Client)
├── components/                  # Reusable components
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer
│   ├── ProductCard.tsx         # Product card
│   ├── ThemeToggle.tsx         # Dark mode toggle
│   ├── LoadingSpinner.tsx      # Loading indicator
│   └── ErrorMessage.tsx        # Error display
├── contexts/                    # React Context
│   ├── CartContext.tsx         # Shopping cart state management
│   └── ThemeContext.tsx        # Theme management
├── lib/                         # Utilities
│   ├── api.ts                  # API functions
│   └── currency.ts             # Currency formatter
├── types/                       # TypeScript types
│   └── product.ts              # Product interface
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── PENJELASAN_TEKNIS.md        # Dokumentasi teknis lengkap
└── QUICK_START.md              # Panduan cepat
```

## Teknik Rendering

### 1. SSG (Static Site Generation)
**Halaman**: `/products`
- Produk di-fetch saat **build time**
- Halaman di-generate sebagai HTML statis
- Loading sangat cepat
- Ideal untuk konten yang jarang berubah

### 2. SSR (Server-Side Rendering)
**Halaman**: `/products/[id]`
- Data di-fetch setiap request
- HTML di-generate di server
- Selalu menampilkan data terbaru
- SEO-friendly

### 3. CSR (Client-Side Rendering)
**Halaman**: `/cart`
- Rendering terjadi di browser
- Interaktif dan real-time
- Menggunakan React Context untuk state management
- Ideal untuk fitur yang memerlukan interaksi tinggi

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18
- **Theme**: next-themes
- **API**: DummyJSON API
- **State Management**: React Context API

## Dokumentasi Lengkap

- [PENJELASAN_TEKNIS.md](PENJELASAN_TEKNIS.md) - Penjelasan detail tentang setiap teknik rendering
- [QUICK_START.md](QUICK_START.md) - Panduan setup cepat dan struktur file

## Fitur Aplikasi

### Homepage
- Tampilan welcome dengan navigasi ke produk
- Dark mode toggle
- Responsive navbar

### Katalog Produk (SSG)
- Grid produk dengan gambar dan informasi
- Filter berdasarkan kategori
- Search produk
- Loading state
- Error handling

### Detail Produk (SSR)
- Informasi lengkap produk
- Galeri gambar
- Rating dan review
- Tombol Add to Cart
- Breadcrumb navigation

### Keranjang Belanja (CSR)
- List produk di keranjang
- Update quantity
- Remove item
- Total harga otomatis
- Pilihan mata uang
- Persistent cart (localStorage)

## API

Aplikasi ini menggunakan [DummyJSON API](https://dummyjson.com/) untuk data produk:
- GET `/products` - List semua produk
- GET `/products/{id}` - Detail produk
- GET `/products/categories` - List kategori

## Konfigurasi

### Next.js Config
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
}
```

### Tailwind Config
- Custom color palette
- Dark mode support
- Responsive breakpoints

## Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Deployment

### Build untuk Production
```bash
npm run build
```

### Jalankan Production Server
```bash
npm run start
```

### Deploy ke Vercel
```bash
vercel
```

##  Author

**Kizzu200**
- GitHub: [@Kizzu200](https://github.com/Kizzu200)
- Repository: [pabp_tugas1](https://github.com/Kizzu200/pabp_tugas1)

## License

Proyek ini dibuat untuk keperluan tugas kuliah PABP (Pemrograman Aplikasi Berbasis Platform).

## Acknowledgments

- Next.js Documentation
- DummyJSON API
- Tailwind CSS
- React Documentation

---

**Tugas 1 - PABP Semester 4**
