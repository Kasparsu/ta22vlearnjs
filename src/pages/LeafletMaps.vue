<script setup>
import LeafletMap from '../components/LeafletMap.vue';
import { ref } from 'vue';
let center = ref([59.42691391802027, 24.74347373142519]);
let zoom = ref(19);
</script>

<template>
    <button class="button" @click="center=[59.410601444230906, 24.6054936274679]">Go To Home</button>
    <input type="range" min="1" max="20" v-model="zoom">
    <h3>{{ center }}</h3>
    <LeafletMap :center="center" :zoom="zoom" @zoom="zoom=$event" @center="center=$event"></LeafletMap>
</template>
<style scoped>

</style>