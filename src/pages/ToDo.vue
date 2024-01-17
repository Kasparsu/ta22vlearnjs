<script setup>
import { ref, reactive, computed } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('Hello Vue');
let newItem = ref('');
let count = ref(0);
let i = 0;
let items = reactive([
    {id:i++,name:'Kommid', isDone: true},
    {id:i++,name:'Õlu', isDone: false},
    {id:i++,name:'Viin', isDone: true},
]);
function addItem() {
    if (newItem.value.trim() !== '') {
        items.push({id:i++,name: newItem.value.trim(), isDone: false});
    }
    newItem.value = '';
}
const doneItems = computed(() => items.filter(item => item.isDone));
const toDoItems = computed(() => items.filter(item => !item.isDone));
</script>

<template>
    <div class="field has-addons my-2">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="newItem" @keydown.enter="addItem">
        </div>
        <div class="control">
            <a class="button is-info" @click="addItem">
                Add Item
            </a>
        </div>
    </div>
    <div class="content">
        <item-list title="All Items" :items="items"></item-list>
        <item-list title="Done Items" :items="doneItems"></item-list>
        <item-list title="ToDo Items" :items="toDoItems"></item-list>
    </div>
</template>