<template>
    <h1>Modals</h1>
    <button class="button is-primary" @click="isOpen=true">Open Modal</button>
    <Modal :open="isOpen" @close="isOpen=false"></Modal>
</template>
<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
let isOpen = ref(false);
</script>