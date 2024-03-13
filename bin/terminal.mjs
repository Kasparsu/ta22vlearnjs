import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}

for(let i = 2902; i>2892; i--){
    let cachePath = `cache/${i}.html`;
    let data;
    if(!fs.existsSync(cachePath)){
        await sleep(1000);
        let res = await axios.get('https://xkcd.com/' + i);
        //CACHE
        fs.writeFileSync(cachePath, res.data);
        data = res.data;
        console.log("LIVE REQUEST!");
    } else {
        data = fs.readFileSync(cachePath);
    }
    const $ = cheerio.load(data);
    let img = $('div#comic>img');
    console.log(img.attr('src'));
    console.log(img.attr('title'));
    console.log(img.attr('alt'));
    
}

