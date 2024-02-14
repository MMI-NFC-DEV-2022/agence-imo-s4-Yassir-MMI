<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { supabase } from '@/supabase';
import type { SchemaOffreMaison } from '@/types';

console.log(supabase);


let { data: tableauDeMaisons, error } = await supabase
  .from('Maison')
  .select('*')





</script>

<template>
  
    <AfficheMaison v-for="maison in tableauDeMaisons" v-bind="maison" :key="maison.id" />  
  
  </template>


