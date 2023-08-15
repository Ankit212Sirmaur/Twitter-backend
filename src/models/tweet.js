const  mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 character']
    },
    userEmail: {
        type: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \n ${this.userEmail}`;
})

// adding hooks i.e => middleware
tweetSchema.pre('save', function(next){
    console.log('inside a hoook');
    this.content = this.content  + '...';
    next();
})

const tweet = mongoose.model('tweet', tweetSchema);

module.exports = tweet;