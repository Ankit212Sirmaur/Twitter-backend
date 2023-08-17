import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 character']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
}, {timestamps: true});

const Tweet = mongoose.model('tweet', tweetSchema);

export default Tweet;