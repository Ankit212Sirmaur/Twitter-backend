import express from 'express';
import {connect} from './config/database.js'
const app = express();

import TweetService from './service/tweet-service.js';

app.listen(3000, async () =>{
   console.log('SERVER STARTED');
    await connect();
    console.log('mongodb connected');
    const Service = new TweetService();
        const tweet = await Service.create({
            content : 'Done with #refactor'
        });
        console.log(tweet);
        
});

