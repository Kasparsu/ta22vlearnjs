import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}

for(let i = 1; i<10; i++){
    let cachePath = `cache/${i}.json`;
    let data;
    if(!fs.existsSync(cachePath)){
        await sleep(1000);
        let res = await axios.post('https://kinnisvara24.ee/search', {
            page: i
        });
        //CACHE
        fs.writeFileSync(cachePath, JSON.stringify(res.data));
        data = res.data;
        console.log("LIVE REQUEST!");
    } else {
        data = JSON.parse(fs.readFileSync(cachePath));
    }
    //console.log(data);
    data.data.forEach(ad => {
        if(ad.address.address){
            console.log(ad.address.address, ad.hind);
        } else {
            let address = ad.address.A1 + ',' + 
                            ad.address.A2 + ',' +
                            ad.address.A3 + ',' +
                            ad.address.A4 + ',' +
                            ad.address.A5 + ',' +
                            ad.address.A6 + ',' +
                            ad.address.A7 + ',' +
                            ad.address.A8 + ','
            console.log(address, ad.hind);            
        }
    });
    
}

