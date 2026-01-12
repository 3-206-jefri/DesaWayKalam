"use client"

import { User, MessageCircle, Share2 } from "lucide-react"

interface ProductInfoProps {
  description: string
  sellerName: string
  sellerType: string
  whatsappNumber: string
  variant?: 'page' | 'stacked'
}

export default function ProductInfo({
  description,
  sellerName,
  sellerType,
  whatsappNumber,
  variant = 'page'
}: ProductInfoProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya ingin bertanya tentang produk ini")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Produk UMKM',
        url: window.location.href
      })
    }
  }

  if (variant === 'stacked') {
    return (
      <div className="mt-8 space-y-6">
        {/* Description */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Deskripsi Produk</h2>
          <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Seller Info & Actions */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">{sellerName}</p>
              <p className="text-sm text-slate-600">{sellerType}</p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 mb-3"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi via WhatsApp
          </button>

          <button
            onClick={handleShare}
            className="w-full px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition border border-slate-300 flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Bagikan
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Deskripsi Produk</h2>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Seller Info & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              {/* Seller Info */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{sellerName}</p>
                  <p className="text-sm text-slate-600">{sellerType}</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 mb-3"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-full px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition border border-slate-300 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
