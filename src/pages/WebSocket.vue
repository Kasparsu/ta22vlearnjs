<template>
<div v-if="name">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Write something" v-model="msg">
        </div>
        <div class="control">
            <a class="button is-info" @click="send()">
                Send
            </a>
        </div>
    </div>
    <p v-for="message in messages" class="mt-2" :class="{'mb-6': message.isMe}">
        <div v-if="!message.isMe" class="notification is-link is-light inline-block py-2">
            {{ message.message }}
            <p class="has-text-dark has-text-weight-semibold">{{ message.name }}</p>
        </div>
        <div v-else class="notification is-primary is-light inline-block py-2 is-pulled-right">
            {{ message.message }}
            <p class="has-text-dark has-text-weight-semibold">{{ message.name }}</p>
        </div>
    </p>
</div>
<div v-if="!name">
    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" placeholder="Your name" v-model="inputName">
        </div>
        <div class="control">
            <a class="button is-info" @click="join()">
                Join
            </a>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
let inputName = ref('');
let name = ref('');
let messages = ref([
    {name: 'asdfas', message: 'asdfas'},
    {name: 'vxxv', message:'asdfas'},
    {name: 'asdas', message: 'asdfas'}
]);
let msg = ref('');
let socket;

function send(){
    if(msg.value.trim() !== ''){
        socket.send(JSON.stringify({name: name.value, message: msg.value, isMe: false}));
        messages.value.push({name: name.value, message: msg.value, isMe: true});
    }
    msg.value='';
}
function join(){
    name.value = inputName.value;
    // Create WebSocket connection.
    socket = new WebSocket("ws://localhost:8080");

    // Connection opened
    // socket.addEventListener("open", (event) => {
    //   socket.send("Hello Server!");
    // });

    // Listen for messages
    socket.addEventListener("message", (event) => {
        console.log("Message from server ", event.data);
        messages.value.push(JSON.parse(event.data));
    });
}
</script>
<style scoped>
.inline-block {
    display: inline-block;
}
</style>