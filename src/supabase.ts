import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// @ts-ignore
globalThis.supabase = supabase

const { data } = await supabase.auth.getUser()
export const user = ref(data.user)
supabase.auth.onAuthStateChange( (evt,session)=>{
    user.value = session?.user ?? null
})