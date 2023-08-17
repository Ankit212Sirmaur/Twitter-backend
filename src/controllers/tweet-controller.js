import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) =>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            successs: true,
            message: 'Successfully created a new tweet',
            data: response,
            error: {},
        })
    } catch (error) {
        return res.status(201).json({
            successs: true,
            message: 'Successfully created a new tweet',
            data: response,
            error: {},
        })
    }
}