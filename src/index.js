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
});


