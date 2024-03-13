import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}
const baseUrl = 'https://wumo.com';
let link = baseUrl + '/wumo/2024/03/13';
for(let i = 0; i<10; i++){
    let cachePath = `cache/${i}.html`;
    let data;
    if(!fs.existsSync(cachePath)){
        await sleep(1000);
        let res = await axios.get(link);
        //CACHE
        fs.writeFileSync(cachePath, res.data);
        data = res.data;
        console.log("LIVE REQUEST!");
    } else {
        data = fs.readFileSync(cachePath);
    }
    const $ = cheerio.load(data);
    let img = $('article.wumo img');
    console.log(img.attr('src'));
    console.log(img.attr('alt'));
    let prev = $('a.prev');
    link = baseUrl + prev.attr('href');
    
}

