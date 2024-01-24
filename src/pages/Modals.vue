<template>
    <h1>Modals</h1>
    <button class="button is-primary" @click="isOpen = true">Open Modal</button>
    <Modal :open="isOpen" @close="isOpen = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/1280/960" alt="">
        </p>
    </Modal>

    <button class="button is-primary" @click="isOpen2 = true">Open Modal2</button>
    <Modal :open="isOpen2" @close="isOpen2 = false">
        <p class="image is-4by3">
            <img src="https://placekitten.com/1280/960" alt="">
        </p>
    </Modal>


    <button class="button is-primary" @click="isOpen3 = true">Open Modal3</button>
    <Modal :open="isOpen3" @close="isOpen3 = false">
        <p class="image is-4by3">
            <img src="https://placebear.com/1280/960" alt="">
        </p>
    </Modal>
</template>
<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
let isOpen = ref(false);
let isOpen2 = ref(false);
let isOpen3 = ref(false);
</script>