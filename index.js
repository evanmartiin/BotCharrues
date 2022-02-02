const { TwitterApi } = require('twitter-api-v2');
const dotenv = require("dotenv");
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const emoji = String.fromCodePoint(parseInt("23F0", 16));
const loading = String.fromCodePoint("9618");
const loaded = String.fromCodePoint("9608");

const tweet = () => {
    const now = new Date();
    const nowDate = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
    const countdown = Math.floor((new Date("2022-07-14") - new Date(nowDate)) / (60*60*24*1000));
    
    const progress = Math.floor(Math.floor((new Date(nowDate) - new Date("2022-01-01")) / (60*60*24*1000)) / 194 * 1000) / 10;
    const progress10 = Math.floor(progress / 10);
    const progText = loaded.repeat(progress10) + loading.repeat(10-progress10)

    if (countdown > 0) {
        const tweetBody = `${emoji} Plus que ${countdown} jours avant les Vieilles Charrues ! \n \n${progress}% – ${progText}`;
        twitterClient.v2.tweet({ "text": tweetBody });
    }
};

tweet();