import axios from "axios";
import * as cheerio from 'cheerio';
for(let i = 2902; i>2892; i--){
    let res = await axios.get('https://xkcd.com/' + i);
    const $ = cheerio.load(res.data);
    let img = $('div#comic>img');
    console.log(img.attr('src'));
    console.log(img.attr('title'));
    console.log(img.attr('alt'));
}