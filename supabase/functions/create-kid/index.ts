import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Verify caller is admin
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization' }), {
        status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    const { data: { user }, error: authErr } = await supabaseClient.auth.getUser()
    if (authErr || !user || user.email !== 'admin@mathkangaroo.app') {
      return new Response(JSON.stringify({ error: 'Forbidden — admin only' }), {
        status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // 2. Parse request body
    const { name, color, passcode } = await req.json()
    if (!name || !color || !passcode) {
      return new Response(JSON.stringify({ error: 'name, color, and passcode are required' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
    if (passcode.length < 4) {
      return new Response(JSON.stringify({ error: 'Passcode must be at least 4 characters' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const email = `${name.toLowerCase().replace(/\s+/g, '')}@mathkangaroo.app`

    // 3. Check if name already taken
    const { data: existing } = await supabaseAdmin
      .from('kids')
      .select('id')
      .eq('name', name)
      .single()

    if (existing) {
      return new Response(JSON.stringify({ error: `A kid named "${name}" already exists` }), {
        status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // 4. Create auth user
    const { data: { user: newUser }, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: passcode,
      email_confirm: true,
    })
    if (createErr) throw createErr

    // 5. Insert into kids table
    const { error: insertErr } = await supabaseAdmin
      .from('kids')
      .insert({ name, color, auth_id: newUser.id, is_admin: false })

    if (insertErr) {
      // Rollback auth user if kids insert fails
      await supabaseAdmin.auth.admin.deleteUser(newUser.id)
      throw insertErr
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
