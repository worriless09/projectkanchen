// lib/supabase/admin.ts

import { createClient as createAdminClient } from '@supabase/supabase-js'

export function createAdmin() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
