-- ============================================
-- SUPABASE SQL SCHEMA FOR UMKM PRODUCTS
-- ============================================

-- Create UMKM Products Table
CREATE TABLE IF NOT EXISTS umkm_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(12, 2) NOT NULL CHECK (price >= 0),
  category VARCHAR(100) NOT NULL,
  whatsapp VARCHAR(20) NOT NULL,
  rating DECIMAL(2, 1) CHECK (rating >= 1 AND rating <= 5),
  photo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_umkm_products_category ON umkm_products(category);
CREATE INDEX IF NOT EXISTS idx_umkm_products_is_active ON umkm_products(is_active);
CREATE INDEX IF NOT EXISTS idx_umkm_products_created_at ON umkm_products(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_umkm_products_rating ON umkm_products(rating DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_umkm_products_updated_at ON umkm_products;
CREATE TRIGGER update_umkm_products_updated_at
  BEFORE UPDATE ON umkm_products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE umkm_products ENABLE ROW LEVEL SECURITY;

-- Policy: Public can view active products
CREATE POLICY "Public can view active UMKM products"
  ON umkm_products
  FOR SELECT
  USING (is_active = true);

-- Policy: Authenticated users can view all products
CREATE POLICY "Authenticated users can view all UMKM products"
  ON umkm_products
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert products
CREATE POLICY "Authenticated users can insert UMKM products"
  ON umkm_products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update products
CREATE POLICY "Authenticated users can update UMKM products"
  ON umkm_products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete products
CREATE POLICY "Authenticated users can delete UMKM products"
  ON umkm_products
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- SAMPLE DATA (OPTIONAL)
-- ============================================

-- Insert sample UMKM products
INSERT INTO umkm_products (name, description, price, category, whatsapp, rating, photo_url, is_active) VALUES
('Keripik Singkong Pedas', 'Keripik singkong dengan bumbu pedas khas desa, renyah dan gurih. Dibuat dari singkong pilihan yang diolah secara tradisional dengan resep turun temurun.', 15000, 'Makanan', '081234567890', 4.5, 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800', true),
('Batik Tulis Motif Tradisional', 'Batik tulis dengan motif khas daerah, dikerjakan oleh pengrajin lokal. Setiap lembar batik memiliki keunikan tersendiri karena dibuat secara manual.', 350000, 'Kerajinan', '081234567891', 5.0, 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800', true),
('Kopi Robusta Premium', 'Kopi robusta asli dari kebun lokal dengan cita rasa khas yang kuat dan aroma yang harum. Dipanggang dengan teknik tradisional untuk menghasilkan rasa terbaik.', 75000, 'Minuman', '081234567892', 4.8, 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800', true),
('Tas Anyaman Bambu', 'Tas anyaman bambu ramah lingkungan dengan desain modern. Cocok untuk berbagai keperluan sehari-hari dan sebagai oleh-oleh khas daerah.', 125000, 'Kerajinan', '081234567893', 4.3, 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', true),
('Sambal Teri Medan', 'Sambal teri dengan bumbu khas yang pedas dan gurih. Terbuat dari teri pilihan dan cabai segar yang diolah dengan resep rahasia keluarga.', 25000, 'Makanan', '081234567894', 4.7, 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800', true),
('Madu Hutan Asli', 'Madu murni dari hutan yang dipanen secara tradisional. Kaya akan nutrisi dan memiliki khasiat untuk kesehatan.', 150000, 'Minuman', '081234567895', 4.9, 'https://images.unsplash.com/photo-1587049352846-4a222e784720?w=800', true),
('Gelang Manik-manik', 'Gelang cantik dari manik-manik dengan berbagai warna dan motif. Dibuat dengan tangan oleh pengrajin lokal yang berpengalaman.', 35000, 'Kerajinan', '081234567896', 4.2, 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800', true),
('Dodol Durian', 'Dodol dengan rasa durian yang legit dan manis. Terbuat dari durian pilihan dan gula aren asli tanpa bahan pengawet.', 45000, 'Makanan', '081234567897', 4.6, 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800', true);

-- ============================================
-- STORAGE BUCKET FOR PRODUCT PHOTOS
-- ============================================

-- Note: Run this in Supabase Storage section or via SQL
-- Create storage bucket for UMKM product photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('umkm-products', 'umkm-products', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policy: Anyone can view files
CREATE POLICY "Public can view UMKM product photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'umkm-products');

-- Storage policy: Authenticated users can upload files
CREATE POLICY "Authenticated users can upload UMKM product photos"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'umkm-products');

-- Storage policy: Authenticated users can update files
CREATE POLICY "Authenticated users can update UMKM product photos"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'umkm-products')
  WITH CHECK (bucket_id = 'umkm-products');

-- Storage policy: Authenticated users can delete files
CREATE POLICY "Authenticated users can delete UMKM product photos"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'umkm-products');

-- ============================================
-- USEFUL QUERIES FOR ADMIN DASHBOARD
-- ============================================

-- Get all active products with latest first
-- SELECT * FROM umkm_products WHERE is_active = true ORDER BY created_at DESC;

-- Get products by category
-- SELECT * FROM umkm_products WHERE category = 'Makanan' AND is_active = true;

-- Get top rated products
-- SELECT * FROM umkm_products WHERE is_active = true ORDER BY rating DESC LIMIT 10;

-- Get product statistics
-- SELECT 
--   COUNT(*) as total_products,
--   AVG(rating) as average_rating,
--   COUNT(DISTINCT category) as total_categories
-- FROM umkm_products WHERE is_active = true;

-- Get products count by category
-- SELECT category, COUNT(*) as count 
-- FROM umkm_products 
-- WHERE is_active = true 
-- GROUP BY category 
-- ORDER BY count DESC;
