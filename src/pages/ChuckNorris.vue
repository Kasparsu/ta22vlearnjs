<template>
<div class="content">
    <h1>{{ joke }}</h1>
</div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
let joke = ref('');

axios.get('https://api.chucknorris.io/jokes/random').then(response => {
    console.log(response.data.value);
    joke.value = response.data.value;
});
</script>