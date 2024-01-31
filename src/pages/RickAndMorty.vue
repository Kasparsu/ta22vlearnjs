<template>
    <div class="field has-addons">
        <p class="control">
            <button :disabled="!info.prev" class="button is-primary" @click="prev">
                Prev
            </button>
        </p>
        <p class="control">
            <button class="button is-static">
                {{ page }}/{{ info.pages }}
            </button>
        </p>
        <p class="control">
            <button :disabled="!info.next" class="button is-primary"  @click="next">
                Next
            </button>
        </p>
    </div>
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
let page = ref(1);
getCharacters('https://rickandmortyapi.com/api/character');

function getCharacters(url){
    axios.get(url).then(response => {
        console.log(response.data);
        info.value = response.data.info;
        chars.value = response.data.results
        
    });
}

function next(){
    getCharacters(info.value.next);
    page.value++;
}
function prev(){
    getCharacters(info.value.prev);
    page.value--;
}
</script>