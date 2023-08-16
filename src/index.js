const express = require('express');
const connect = require('./config/database');
const app = express();

const {HashtagRepository} = require('./repository');

app.listen(3000, async () =>{
   console.log('SERVER STARTED');
    await connect();
    console.log('mongodb connected');
    // const tweets = await Tweet.find({
    //     content: ['second tweet', 'my tweet', '12454556']
    // });
    // console.log(tweets);
    const repo = new HashtagRepository();
    await repo.bulkCreate([
        {
            title: 'Trend',
            tweets: []
        },
        {
            title: 'Excited',
            tweets: [],
        },
        {
            title: 'Techonology',
            tweets: [],
        },
        {
            title: 'Python',
            tweets: [],
        },
        {
            title: 'Web3',
            tweets: [],
        }
    ])
});