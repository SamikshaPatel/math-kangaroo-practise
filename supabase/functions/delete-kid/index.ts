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
    const { kid_id } = await req.json()
    if (!kid_id) {
      return new Response(JSON.stringify({ error: 'kid_id is required' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 3. Get auth_id before deleting
    const { data: kid, error: fetchErr } = await supabaseAdmin
      .from('kids')
      .select('auth_id, name')
      .eq('id', kid_id)
      .single()

    if (fetchErr || !kid) {
      return new Response(JSON.stringify({ error: 'Kid not found' }), {
        status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // 4. Delete progress data (attempts + progress rows)
    await supabaseAdmin.from('attempts').delete().eq('kid_id', kid_id)
    await supabaseAdmin.from('progress').delete().eq('kid_id', kid_id)

    // 5. Delete from kids table
    const { error: deleteKidErr } = await supabaseAdmin
      .from('kids')
      .delete()
      .eq('id', kid_id)
    if (deleteKidErr) throw deleteKidErr

    // 6. Delete auth user
    if (kid.auth_id) {
      const { error: deleteAuthErr } = await supabaseAdmin.auth.admin.deleteUser(kid.auth_id)
      if (deleteAuthErr) throw deleteAuthErr
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
