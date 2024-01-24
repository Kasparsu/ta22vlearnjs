<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ character.name }}
            </p>
        </header>
        <div class="card-image">
            <figure class="image">
                <img :src="character.image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">

            </div>
        </div>
    </div>
</template>
<script setup>
import {defineProps} from 'vue';
defineProps(['character']);
</script>