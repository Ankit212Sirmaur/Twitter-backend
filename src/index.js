const express = require('express');
const connect = require('./config/database');
const app = express();

const {HashtagRepository} = require('./repository');

app.listen(3000, async () =>{
   console.log('SERVER STARTED');
    await connect();
    console.log('mongodb connected');
    let repo = new HashtagRepository();
    const response = await repo.findByName(['Excited','Trend']);
    console.log(response);

});

