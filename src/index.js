const express = require('express');
const connect = require('./config/database');
const app = express();


const TweetService = require('./service/tweet-service');

app.listen(3000, async () =>{
   console.log('SERVER STARTED');
    await connect();
    console.log('mongodb connected');
    const Service = new TweetService();
    const tweet = await Service.create({
        content : 'is #tweets working ?'
    });
    console.log(tweet);
});

