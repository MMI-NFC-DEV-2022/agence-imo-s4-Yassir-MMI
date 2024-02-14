<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { type SchemaOffreMaison } from '@/types';
import { ref } from 'vue';

const maMaison = ref<ShemaOffreMaison>({
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
});

</script>

<template>
    <AfficheMaison v-bind="maMaison" />
</template>

