import express from 'express';
import { connect } from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
import { v2 as cloudinary } from 'cloudinary'

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(port, async () => {
    console.log(`SERVER STARTED  at ${port}`);
    await connect();
    console.log('mongodb connected');
});




