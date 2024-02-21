function write(text){
    process.stdout.write(text);
}
// light colors
write('\x1B[1;30m'); write('hello'); write('\n');
write('\x1B[1;31m'); write('hello'); write('\n');
write('\x1B[1;32m'); write('hello'); write('\n');
write('\x1B[1;33m'); write('hello'); write('\n');
write('\x1B[1;34m'); write('hello'); write('\n');
write('\x1B[1;35m'); write('hello'); write('\n');
write('\x1B[1;36m'); write('hello'); write('\n');
write('\x1B[1;37m'); write('hello'); write('\n');
//reset
write('\x1B[0m'); write('hello'); write('\n');
//default
write('\x1B[39m'); write('hello'); write('\n');
// darker colors
write('\x1B[0;30m'); write('hello'); write('\n');
write('\x1B[0;31m'); write('hello'); write('\n');
write('\x1B[0;32m'); write('hello'); write('\n');
write('\x1B[0;33m'); write('hello'); write('\n');
write('\x1B[0;34m'); write('hello'); write('\n');
write('\x1B[0;35m'); write('hello'); write('\n');
write('\x1B[0;36m'); write('hello'); write('\n');
write('\x1B[0;37m'); write('hello'); write('\n');

// background colors
write('\x1B[0;40m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;41m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;42m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;43m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;44m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;45m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;46m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[0;47m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[100m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[101m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[102m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[103m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[104m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[105m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[106m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[107m'); write('hello'); write('\x1B[0m'); write('\n');


write('\x1B[31m'); write('\x1B[44m'); write('hello'); write('\x1B[0m'); write('\n');

for(let i = 0; i<256; i++){
    if(i%16==0){
        write('\n');
    }
    write('\x1B[38;5;' + i + 'm'); write(i.toString().padEnd(4, ' '));
}


for(let r = 0; r<256; r++){
    for(let g = 0; g<256; g++){
        for(let b = 0; b<256; b++){
            write(`\x1B[48;2;${r};${g};${b}m`); write(' ');
        }
    }
   
}