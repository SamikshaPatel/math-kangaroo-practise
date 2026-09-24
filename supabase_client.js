// ─────────────────────────────────────────────────────────────
// Supabase client — shared across all pages
// The anon key is safe to include in frontend code.
// Security is enforced by Row Level Security policies in the DB.
// ─────────────────────────────────────────────────────────────
const SUPABASE_URL      = 'https://dlwbedohwifrxuxvijrp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3IV7dpuHVDgw491zBA2LxA_JpSYd0l_';
const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, storageKey: 'mkp_supabase_session' }
});
