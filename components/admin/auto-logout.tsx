'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

// Contoh: 1 Menit (ubah angka ini sesuai kebutuhan)
// Jika ingin 30 menit: 30 * 60 * 1000
const MAX_INACTIVITY_TIME = 15 * 60 * 1000 

export default function AutoLogout() {
  const router = useRouter()
  const supabase = createClient()
  const [mounted, setMounted] = useState(false)

  const handleLogout = async () => {
    // Hapus data waktu
    if (typeof window !== 'undefined') {
        localStorage.removeItem('lastAdminActivity')
    }
    
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  // Fungsi untuk mengecek waktu
  const checkInactivity = () => {
    const lastActivity = localStorage.getItem('lastAdminActivity')
    const now = Date.now()

    if (lastActivity) {
      const timeDiff = now - parseInt(lastActivity)
      
      // Jika selisih waktu melebihi batas, logout
      if (timeDiff > MAX_INACTIVITY_TIME) {
        handleLogout()
      }
    } else {
      // Jika belum ada data (baru login), set waktu sekarang
      localStorage.setItem('lastAdminActivity', now.toString())
    }
  }

  // Fungsi untuk update waktu saat ada aktivitas
  const updateActivity = () => {
    localStorage.setItem('lastAdminActivity', Date.now().toString())
  }

  useEffect(() => {
    setMounted(true)
    
    // 1. Cek langsung saat komponen pertama kali di-load (misal saat buka tab baru)
    checkInactivity()

    // 2. Pasang interval untuk mengecek secara berkala (misal tiap 10 detik)
    // Ini menjaga agar tetap logout jika tab DIBIARKAN TERBUKA
    const intervalId = setInterval(checkInactivity, 10000)

    // 3. Daftar event aktivitas user
    const events = [
      // 'mousedown',
      // 'mousemove', // Opsional: matikan ini jika terlalu berat, cukup 'click' & 'keydown'
      'keydown',
      // 'scroll',
      // 'touchstart',
      'click'
    ]

    // Pasang event listener
    events.forEach((event) => {
      window.addEventListener(event, updateActivity)
    })

    return () => {
      clearInterval(intervalId)
      events.forEach((event) => {
        window.removeEventListener(event, updateActivity)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}