const { TwitterApi } = require('twitter-api-v2');
const dotenv = require("dotenv");
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const tweet = () => {
    const nowDate = new Date(); 
    const date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
    const countdown = Math.floor((new Date("2022-07-14") - new Date(date)) / (60*60*24*1000));
    const tweetBody = `Plus que ${countdown} jours avant les Vieilles Charrues ! :) @evantinmar`;

  twitterClient.v2.tweet({ "text": tweetBody });
};

tweet();
