<template>

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

    <span class="tag is-info is-light is-large" v-for="message in messages">{{ message }}</span>
</template>
<script setup>
import { ref } from 'vue';

let messages = ref([]);
let msg = ref('');
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
// });

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    messages.value.push(event.data);
});

function send(){
    if(msg.value.trim() !== ''){
        socket.send(msg.value);   
    }
    msg.value='';
}
</script>