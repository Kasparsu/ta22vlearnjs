<script setup>
    import { ref, reactive } from 'vue';

    let message = ref('Hello Vue');
    let newItem = ref('');
    let count = ref(0);
    let items = reactive([
        'Leib',
        'Piim',
        'Viin'
    ]);
    function addItem(){
        if(newItem.value.trim() !== ''){
            items.push(newItem.value.trim());
        }
        newItem.value = '';
    }
</script>

<template>
    <div class="container">
        {{ count }} 
        <button class="button is-primary" @click="count++">Count: {{ count }}</button>
        <!-- <input type="text" :value="message" class="input mt-2" @input="message=$event.target.value"> -->
        <input type="text" v-model="message" class="input mt-2">
        {{ message.split('').reverse().join('') }}
        <input type="text" v-model="newItem" class="input mt-2" @keydown.enter="addItem">
        <button class="button is-primary" @click="addItem">Add Item</button>
        <div class="content">
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>