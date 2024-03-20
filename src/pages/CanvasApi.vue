<script setup>
    import {onMounted, ref} from 'vue';
    let mycanvas = ref(null);
    let ctx;
    let x = 100;
    let y = 100;
    let xSpeed = 0;
    let ySpeed = 0;

    let start;
    let previous = 0;
    function step(timeStamp) {
        if(start === undefined) {
            start = timeStamp;
        } 
        const elapsed = timeStamp - start;
        const delta = timeStamp-previous;
 
        x+=xSpeed*60/1000*delta;
        y+=ySpeed*60/1000*delta;
        let ySign = ySpeed<0 ? -1 : 1;
        ySpeed-=0.1 * ySign;
        let xSign = xSpeed<0 ? -1 : 1;
        xSpeed-=0.1 * xSign;
        draw();

        previous = timeStamp;
        window.requestAnimationFrame(step);
    }


    onMounted(() => {
        mycanvas.value.width = 1280;
        mycanvas.value.height = 720;
        ctx = mycanvas.value.getContext("2d");
        ctx.beginPath();
        ctx.arc(200, 200, 100, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
        ctx.clearRect(0, 0,  1280,  720);
        // setInterval(() => {
        //     x+=5;
        //     draw();
        // }, 1000/60);
        window.requestAnimationFrame(step);
    });




    function move(event){
        console.log(event);
        if(event.code == 'KeyD'){
            xSpeed=5;
        }
        if(event.code == 'KeyA'){
            xSpeed=-5;
        }
        if(event.code == 'KeyW'){
            ySpeed=-5;
        }
        if(event.code == 'KeyS'){
            ySpeed=5;
        }
    }

    

    function draw(){
        ctx.clearRect(0, 0,  1280,  720);
        ctx.beginPath();
        ctx.arc(x, y, 100, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
</script>
<template>
    <canvas tabindex="1" ref="mycanvas" @keydown="move"></canvas>
</template>
<style scoped>
    canvas {
        border:1px solid #000000;
    }
</style>