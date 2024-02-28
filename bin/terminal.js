var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
process.stdin.on('keypress', (chunk, key) => {

    if (key && key.name == 'c' && key.ctrl){
        process.exit();
    }
    if (key && key.name == 'w'){
        write('\x1B[1D'); write(' ');
        write('\x1B[1D'); write('\x1B[1A'); write('@');
    }
    if (key && key.name == 's'){
       write('\x1B[1D'); write(' ');
       write('\x1B[1D'); write('\x1B[1B'); write('@');
    }
    if (key && key.name == 'a'){
        write('\x1B[1D'); write(' ');
        write('\x1B[2D'); write('@');
    }
    if (key && key.name == 'd'){
        write('\x1B[1D'); write(' ');
        write('@');
    }
    if (key && key.name == 'return'){
       
    }
});


function write(text){
    process.stdout.write(text);
}
console.clear();
write('@');