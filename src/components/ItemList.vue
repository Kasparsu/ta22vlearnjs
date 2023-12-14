<script setup>
defineProps(['title', 'items']);
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            <input type="checkbox" v-model="item.isDone">
            {{ item.name }}
        </li>
    </ul>
</template>