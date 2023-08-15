const express = require('express');
const connect = require('./config/database');
const app = express();


const Tweet = require('./models/tweet');

app.listen(3000, async () =>{
    await connect();
    console.log('mongodb connected');
    const tweets = await Tweet.find({
        content: ['second tweet', 'my tweet', '12454556']
    });
    console.log(tweets);
});