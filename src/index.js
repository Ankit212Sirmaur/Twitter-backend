import express from 'express';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
import {UserRepository, TweetRepository, HashtagRepository} from './repository/index.js';
import LikeService from './service/like-service.js';
import TweetService from './service/tweet-service.js';
import Tweet from './models/tweet.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(3001, async () =>{
   console.log('SERVER STARTED');
    await connect();
    console.log('mongodb connected');

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();

    // const tweets = await tweetRepo.getAll(0, 10);
    // let tweet_id = tweets[0].id;
    // // const user = await userRepo.create({
    // //     email: 'ankit01@gmail.com',
    // //     password: '212',
    // //     name: 'kumar'
    // // });
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toogleLike(tweet_id, 'Tweet', users[0].id);
});


