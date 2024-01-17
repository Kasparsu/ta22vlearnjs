<template>
    <div class="tabs is-centered">
        <ul>
            
            <li v-for="page in router.getRoutes()" :class="{'is-active': route.path == page.path}">
                <RouterLink :to="page.path">{{ page.name }}</RouterLink>
            </li>
           
        </ul>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(router.getRoutes());

</script>