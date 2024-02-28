function write(text){
    process.stdout.write(text);
}

//write('\x1B[1;30m'); write('\u0007');  write('\n'); //bell symbol
// write('hello world');

// setTimeout(() => {
//     write('\x1B[5D'); write('TA22V'); // A -> up B ->down C-> right D->left
// }, 5000);
let date = new Date();
write(date.toTimeString().substring(0, 8));
setInterval(() => {
    write('\x1B[?25l'); // cursor is invisible
    write('\x1B[8D');
    date = new Date();
    write(date.toTimeString().substring(0, 8));
    write('\x1B[?25h'); // cursor is visible
}, 0);