const  mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    },
    comments: [
        // {
        //     content: {
        //         type: String,
        //         required: true,
        //     }
        // }
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps: true});

const tweet = mongoose.model('tweet', tweetSchema);

module.exports = tweet;