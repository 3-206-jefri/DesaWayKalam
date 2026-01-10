# UMKM Components

Komponen-komponen reusable untuk halaman produk UMKM.

## Struktur Komponen

### 1. **StarRating.tsx**
Komponen rating bintang yang reusable.

**Props:**
- `rating`: Nilai rating (number)
- `reviewCount`: Jumlah ulasan (number)
- `size`: Ukuran ("sm" | "md" | "lg")

**Fitur:**
- Bintang terisi warna biru
- Menampilkan angka rating dan jumlah ulasan
- 3 ukuran berbeda

---

### 2. **CategoryFilter.tsx**
Filter kategori produk (Client Component).

**Props:**
- `categories`: Array kategori
- `activeCategory`: Kategori aktif
- `onCategoryChange`: Callback saat kategori berubah

**Fitur:**
- Button pills dengan active state
- Smooth transitions
- Client-side filtering

---

### 3. **ProductCard.tsx**
Card produk untuk grid (Client Component).

**Props:**
- `slug`, `image`, `name`, `description`
- `price`, `rating`, `reviewCount`
- `whatsappNumber`

**Fitur:**
- Product image dengan aspect ratio 1:1
- Star rating display
- Price display
- "Detail" dan "WA" buttons
- Hover shadow effect

---

### 4. **UmkmHero.tsx**
Hero section untuk halaman UMKM.

**Fitur:**
- Navbar terintegrasi
- Gradient background
- Title dan subtitle

---

### 5. **ProductDetailHero.tsx**
Hero untuk halaman detail produk (Client Component).

**Props:**
- `image`, `category`, `name`
- `rating`, `reviewCount`, `price`

**Fitur:**
- Back button ke /umkm
- Large product image
- Category badge
- Star rating dan price

---

### 6. **ProductInfo.tsx**
Informasi produk detail (Client Component).

**Props:**
- `description`, `sellerName`, `sellerType`
- `whatsappNumber`

**Fitur:**
- Deskripsi produk lengkap
- Seller info card
- WhatsApp contact button
- Share button (Web Share API)

---

## Data Structure

File: `lib/data/umkm-data.ts`

```typescript
interface Product {
  slug: string
  name: string
  description: string
  price: string
  priceNumber: number
  category: string
  rating: number
  reviewCount: number
  image: string
  sellerName: string
  sellerType: string
  whatsappNumber: string
}
```

## URL Structure

- `/umkm` - List semua produk dengan filter
- `/umkm/kopi-robusta-premium` - Detail produk
- `/umkm/[slug]` - Dynamic route

## Cara Menambah Produk

Edit `lib/data/umkm-data.ts`:

```typescript
{
  slug: "produk-baru",
  name: "Nama Produk",
  description: "Deskripsi lengkap",
  price: "Rp 100.000",
  priceNumber: 100000,
  category: "Makanan & Minuman", // atau "Kerajinan"
  rating: 4.5,
  reviewCount: 20,
  image: "/path/to/image.jpg",
  sellerName: "Nama Penjual",
  sellerType: "Penjual Terpercaya",
  whatsappNumber: "628xxx"
}
```
