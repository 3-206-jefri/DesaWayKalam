// Format currency to IDR
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Format WhatsApp number for display
export function formatWhatsApp(number: string): string {
  // Remove all non-digits
  const cleaned = number.replace(/\D/g, '')
  
  // Format as: 0812-3456-7890
  if (cleaned.startsWith('62')) {
    const withoutPrefix = '0' + cleaned.slice(2)
    return withoutPrefix.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
  }
  
  if (cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
  }
  
  return number
}

// Format date to Indonesian locale
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

// Parse currency input (remove non-digits)
export function parseCurrency(value: string): number {
  const cleaned = value.replace(/[^0-9]/g, '')
  return parseInt(cleaned) || 0
}
