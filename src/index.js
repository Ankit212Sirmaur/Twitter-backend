const express = require('express');
const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-respository')

app.listen(3000, async () =>{
    console.log('server started');
    await connect();
    console.log('mongodb connected');
    // const  tweet = await Tweet.create({
    //     content: 'second tweet',
    // })
    // const tweet = await Tweet.findById('64da3758a8a7f2c8d3cc6129');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save(); 
    // const tweet2 = await Tweet.find({userEmail: 'a@b.com '});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.update('64da3569ce3bf5b8d4059250',{content: 'i am updating again'})
    console.log(tweet);
});