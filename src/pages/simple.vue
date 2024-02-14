<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import type { SchemaOffreMaison } from '@/types';

const maMaison: SchemaOffreMaison = {
  nomMaison: "Maison",
  prix: 1000,
  adresse: "123 rue de la maison",
  nbrChambres: 3,
  nbrSDB: 2,
  favori: true,
  image: "pexels-binyamin-mellish-106399.jpg",
  surface: '30x40m²',
};
const tableauDeMaisons: SchemaOffreMaison[] = [
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
  {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "123 rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    favori: true,
    image: "pexels-binyamin-mellish-106399.jpg",
    surface: '30x40m²',
  },
];


</script>

<template>
  <AfficheMaison :nom-maison="maMaison.nomMaison" :prix="maMaison.prix" :adresse="maMaison.adresse"
    :nbr-chambres="maMaison.nbrChambres" :nbrSDB="maMaison.nbrSDB" :favori="maMaison.favori" :image="maMaison.image"
    :surface="maMaison.surface" />


    <AfficheMaison v-bind="maMaison" />
    <AfficheMaison v-bind="tableauDeMaisons[0]" />
    <AfficheMaison v-bind="tableauDeMaisons[1]" />
    
    <AfficheMaison v-for="maison in tableauDeMaisons" v-bind="maison" :key="maison.id" />  

  <AfficheMaison nom-maison="Maison" :favori="true" image="pexels-binyamin-mellish-106399 1.jpg" />
  
  </template>


