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
import { ref, reactive, onMounted } from 'vue';
let info = ref({});
let chars = ref([]);
let page = ref(1);
getCharacters('https://rickandmortyapi.com/api/character');

function getCharacters(url){
    axios.get(url).then(response => {
        console.log(response.data);
        info.value = response.data.info;
        chars.value.push(...response.data.results)
        
    });
}

function next(){
    getCharacters(info.value.next);
    page.value++;
}
onMounted(()=>{
    console.log(window);

    document.addEventListener('scroll', () => {
        if(window.scrollY+window.innerHeight > document.body.clientHeight - 200){
            next();
        }
    })
});

</script>