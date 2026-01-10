import { z } from 'zod'

// WhatsApp number validation for Indonesian format
const whatsappRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/

export const productSchema = z.object({
  name: z.string()
    .min(3, 'Nama produk minimal 3 karakter')
    .max(100, 'Nama produk maksimal 100 karakter'),
  
  description: z.string()
    .max(500, 'Deskripsi maksimal 500 karakter')
    .optional(),
  
  category: z.enum(['Makanan', 'Minuman', 'Kerajinan', 'Lainnya']),
  
  price: z.number()
    .min(0, 'Harga tidak boleh negatif')
    .or(z.string().transform((val) => {
      const num = parseFloat(val.replace(/[^0-9]/g, ''))
      return isNaN(num) ? 0 : num
    })),
  
  whatsapp: z.string()
    .regex(whatsappRegex, 'Format WhatsApp tidak valid (contoh: 081234567890 atau +6281234567890)')
    .transform((val) => {
      // Normalize to +62 format
      if (val.startsWith('0')) {
        return '+62' + val.slice(1)
      }
      if (val.startsWith('62')) {
        return '+' + val
      }
      return val
    }),
  
  rating: z.number()
    .min(1, 'Rating minimal 1 bintang')
    .max(5, 'Rating maksimal 5 bintang'),
})

export type ProductFormData = z.infer<typeof productSchema>

export interface Product extends ProductFormData {
  id: string
  image?: string
  createdAt: Date
  updatedAt: Date
}
