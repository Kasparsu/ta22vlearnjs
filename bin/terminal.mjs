import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import ProgressBar from 'progress';



yargs(hideBin(process.argv))
    .command('curl <url>', 'fetch the contents of the URL', () => { }, (argv) => {
        console.info(argv)
        var bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', { total: 100 });
        var timer = setInterval(function () {
            bar.tick();
            if (bar.complete) {
                console.log('\ncomplete\n');
                clearInterval(timer);
            }
        }, 1000);
    })
    .demandCommand(1)
    .parse()


console.log(chalk.red.bgCyanBright.underline('hello'));
console.log(boxen('hello', {
    padding: 2,
    margin: 2,
    borderStyle: 'round',
    title: 'hello title'
}));

console.log(boxen(chalk.red.bgCyanBright.underline('hello'), {
    padding: 2,
    margin: 2,
    borderStyle: 'round',
    title: chalk.red.bgCyanBright.underline('hello')
}));
//console.log('http://google.com');