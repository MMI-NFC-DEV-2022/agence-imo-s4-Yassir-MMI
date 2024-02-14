<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import type { SchemaOffreMaison } from '@/types';


const maMaison:SchemaOffreMaison = {
    nomMaison: "Maison",
    prix: 1000,
    adresse: '123 rue',
    image: 'pexels-binyamin-mellish-106399.jpg',
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    surface: '30x40m²',
}
</script>

<template>
  <main>bonjour de home
    <AfficheMaison nomMaison="Maison" image="pexels-binyamin-mellish-106399.jpg" prix="10k"/>
  </main>
</template>
