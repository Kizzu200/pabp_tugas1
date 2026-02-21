# 🚀 Quick Start Guide

## Langkah-langkah Setup Cepat

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

### 3. Buka Browser
```
http://localhost:3000
```

## 📦 Struktur File Penting

```
Tugas 1/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Context Provider)
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Tailwind styles
│   ├── products/          # SSG - Product list
│   │   ├── page.tsx
│   │   ├── ProductsClient.tsx
│   │   └── [id]/          # SSR - Product detail
│   │       └── page.tsx
│   └── cart/              # CSR - Shopping cart
│       └── page.tsx
├── components/            # Reusable components
├── contexts/             # Context API (State Management)
├── lib/                  # API utilities
├── types/                # TypeScript types
└── README.md             # Dokumentasi lengkap
```

## ✅ Checklist Sebelum Demo Video

- [ ] Install dependencies (`npm install`)
- [ ] Test development server (`npm run dev`)
- [ ] Buka semua halaman:
  - [ ] Homepage (/)
  - [ ] Products (/products)
  - [ ] Product Detail (/products/1)
  - [ ] Cart (/cart)
- [ ] Test fitur search & filter
- [ ] Test tambah ke keranjang
- [ ] Test update quantity di cart
- [ ] Test responsive (resize browser)
- [ ] Baca PENJELASAN_TEKNIS.md untuk script video

## 🎥 Persiapan Video

1. Clear browser cache
2. Open DevTools (F12) untuk show localStorage
3. Record screen dengan audio
4. Follow script di PENJELASAN_TEKNIS.md
5. Duration: 4-7 menit

## 🚢 Deploy ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: Next.js e-commerce with SSR, SSG, CSR"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## 📝 Build Production

```bash
npm run build
npm start
```

## ❓ Troubleshooting

### Error: Module not found
```bash
npm install
```

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Image loading error
- Check internet connection
- API DummyJSON harus accessible

## 🎯 Fitur yang Diimplementasikan

✅ SSG (Static Site Generation)
✅ SSR (Server-Side Rendering)
✅ CSR (Client-Side Rendering)
✅ Context API (State Management)
✅ localStorage Persistence
✅ Responsive Design
✅ Loading States
✅ Error Handling
✅ TypeScript
✅ Tailwind CSS

## 📞 Support

Jika ada masalah, check:
- README.md - Dokumentasi lengkap
- PENJELASAN_TEKNIS.md - Penjelasan detail setiap teknik

Good luck! 🎉
