var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
process.stdin.on('keypress', (chunk, key) => {
    //console.log(key);
    if (key && key.name == 'q'){
        process.exit();
    }
    if (key && key.name == 'c' && key.ctrl){
        process.exit();
    }
    if (key && key.name == 'up'){
        position--;
        
        writeOptions();
    }
    if (key && key.name == 'down'){
        position++;
        writeOptions();
    }
    if (key && key.name == 'return'){
        console.log('User has selected: ' + options[position]);
        process.exit();
    }
});


function write(text){
    process.stdout.write(text);
}

let options = ['piim', 'sai', 'leib', 'candy', 'fruit'];
let position = 0;
let first = true;
function writeOptions(){
    if(!first){
        write(`\x1B[${options.length}F`);
    }
    if(position<0){
        position = options.length-1;
    }
    if(position>options.length-1){
        position = 0;
    }
    options.forEach((option, key) => {
        if(key == position){
            write('\x1B[7m');
        }
        write(option); write('\n');
        if(key == position){
            write('\x1B[27m');
        }
    });
    first = false;
}

writeOptions();