const express = require('express');
const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () =>{
    console.log('server started');
    await connect();
    console.log('mongodb connected');
    // const  tweet = await Tweet.create({
    //     content: 'second tweet',
    // })
    const tweet = await Tweet.findById('64da3758a8a7f2c8d3cc6129');
    const tweet2 = await Tweet.find({userEmail: 'a@b.com '});
    console.log(tweet);
});