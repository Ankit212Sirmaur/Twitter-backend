import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 character']
    },
}, {timestamps: true});

const Tweet = mongoose.model('tweet', tweetSchema);

export default Tweet;