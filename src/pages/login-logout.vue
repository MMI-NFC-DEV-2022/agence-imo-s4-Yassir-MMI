<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>
<template>
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
        <button v-else @pointerdown="supabase.auth.signInWithOAuth({ provider: 'github' })">
            Se connecter avec Github
        </button>
    </div>
</template>    