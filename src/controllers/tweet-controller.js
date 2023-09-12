import TweetService from "../service/tweet-service.js";

import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');

const tweetService = new TweetService();

export const createTweet = async (req, res) =>{
    try {
        singleUploader(req, res,async function(err, data){
            if(err){
                return res.status(500).json({error: err});
            }
            console.log(req.file);
            const playload = {...req.body};
            playload.image = req.file.location;
            const response = await tweetService.create(playload);
            return res.status(201).json({
                successs: true,
                message: 'Successfully created a new tweet',
                data: response,
                error: {},
            });
        });
    } catch (error) {
        return res.status(500).json({
            successs: false,
            message: 'Something went wrong',
            data: {},
            error: error
        })
    }
}

export const getTweet = async (req, res) =>{
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            successs: true,
            message: 'Successfully fetched a tweet',
            data: response,
            error: {},
        })
    } catch (error) {
        return res.status(401).json({
            successs: true,
            message: 'Something went wrong while fetching tweet',
            data: response,
            error: {},
        })
    }
}