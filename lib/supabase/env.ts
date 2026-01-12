function sanitizeEnv(value: string | undefined) {
  if (!value) return undefined
  const trimmed = value.trim()
  return trimmed.replace(/^['"]|['"]$/g, '')
}

export function readSupabaseEnv(): { supabaseUrl: string; supabaseAnonKey: string }
export function readSupabaseEnv(options: {
  allowMissing: true
}): { supabaseUrl: string; supabaseAnonKey: string } | null
export function readSupabaseEnv(options?: {
  allowMissing?: boolean
}): { supabaseUrl: string; supabaseAnonKey: string } | null {
  const allowMissing = options?.allowMissing ?? false

  const supabaseUrl = sanitizeEnv(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  )
  const supabaseAnonKey = sanitizeEnv(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY
  )

  if (!supabaseUrl || !supabaseAnonKey) {
    if (allowMissing) return null
    throw new Error(
      'Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (note: .env.local overrides .env).'
    )
  }

  try {
    const parsed = new URL(supabaseUrl)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      throw new Error('Invalid protocol')
    }
  } catch {
    if (allowMissing) return null
    throw new Error(
      'Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL. Check NEXT_PUBLIC_SUPABASE_URL (note: .env.local overrides .env).'
    )
  }

  return { supabaseUrl, supabaseAnonKey }
}
