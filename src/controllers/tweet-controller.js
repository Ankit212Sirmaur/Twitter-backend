import TweetService from "../service/tweet-service.js"
const tweetService = new TweetService();
import { uploadImageToCloudinary } from "../config/file-upload-config.js";

export const createTweet = async (req, res) => {
    try {
        let imageUrl = '';
        if (req.file) {
            try {
                imageUrl = await uploadImageToCloudinary(req.file.buffer);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: 'Error uploading image to Cloudinary',
                    error: error.message || error,
                });
            }
        }
        const payload = {
            content: req.body.content,
            image: imageUrl,
            userId: req.user._id,
        };
        const response = await tweetService.create(payload);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            error: {},
        });
    } catch (error) {
        console.error('Error during tweet creation:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error.message || error,
        });
    }
};


export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id,);
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
export const deleteTweet = async (req, res) => {
    try {
        const response = await tweetService.deleteTweet(req.params.id, req.user.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted the tweet',
            data: response,
            error: {}
        });

    } catch (error) {
        console.error('Delete tweet error:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while deleting tweet',
            data: {},
            error: error.message
        });
    }
}
export const getTweetBasedonHashtag = async (req, res) => {
    try {
        const { filter, offset, limit } = req.body;
        const response = await tweetService.getByName({
            titleList: filter,
            offset: offset,
            limit: limit
        });

        return res.status(200).json({
            success: true,
            message: 'Successfully fetched tweets',
            data: response,
            error: {},
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching tweets',
            data: {},
            error: error.message,
        });
    }
};

