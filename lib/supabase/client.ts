import { createBrowserClient } from '@supabase/ssr'
import { readSupabaseEnv } from './env'

export function createClient() {
  const { supabaseUrl, supabaseAnonKey } = readSupabaseEnv()
  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}