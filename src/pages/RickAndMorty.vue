<template>
    <div class="columns is-multiline">
        <div v-for="char in chars" class="column is-one-quarter">
            <CharacterCard :character="char"></CharacterCard>
        </div>
    </div>
</template>
<script setup>
import CharacterCard from '../components/CharacterCard.vue';
import axios from 'axios';
import { ref, reactive } from 'vue';
let info = ref({});
let chars = ref([]);
axios.get('https://rickandmortyapi.com/api/character').then(response => {
    console.log(response.data);
    info.value = response.data.info;
    chars.value = response.data.results
});
</script>