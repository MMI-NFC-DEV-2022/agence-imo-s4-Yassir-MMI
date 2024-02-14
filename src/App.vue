<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Test</h1>

    <nav class="*:text-red-500 flex flex-col">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/simple">Simple</RouterLink>      
      <RouterLink to="/maisons">Maisons</RouterLink>
      <RouterLink to="/maisons/edit"> Créer des Maisons</RouterLink>
      <RouterLink to="/login-logout">Connexion</RouterLink>  
      <RouterLink to="/quartier">Quartier</RouterLink> 

    </nav>
  </header>

 <Suspense> 
   <RouterView />

 </Suspense>
</template>
