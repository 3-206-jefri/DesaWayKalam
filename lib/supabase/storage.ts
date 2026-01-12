import { readSupabaseEnv } from './env'

export const UMKM_IMAGES_BUCKET = 'umkm-images'

export function resolveUmkmImageUrl(value: unknown) {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim().replace(/^['"]|['"]$/g, '')
  if (!trimmed) return undefined
  if (trimmed.startsWith('blob:')) return undefined

  // Already a usable URL or local path
  if (
    trimmed.startsWith('/') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:image/')
  ) {
    return trimmed
  }

  // Treat as a storage object path/key inside our bucket
  const env = readSupabaseEnv({ allowMissing: true })
  if (!env) return undefined

  return `${env.supabaseUrl}/storage/v1/object/public/${UMKM_IMAGES_BUCKET}/${trimmed}`
}
