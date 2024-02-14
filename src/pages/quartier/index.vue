<script setup lang="ts">
import { supabase } from "../../supabase";

// const { data, error } = await supabase.from('QuartierCommune').select(
//   *
// );
const { data, error } = await supabase.from('Quartier').select(`
    nom_quartier,
    id,
    Commune(id, nom_commune)
`);

if (error) console.log("n'a pas pu charger la table quartier_commune :", error);

</script>

<template>
    <section class="flex flex-col">
        <h3 class="text-2xl">Liste des quartiers</h3>
        <ul>
            <li v-for="quartierObject in (data as any[])">
                {{ quartierObject.Commune.nom_commune }} -
                {{ quartierObject.nom_quartier }}
            </li>
        </ul>
    </section>
</template>