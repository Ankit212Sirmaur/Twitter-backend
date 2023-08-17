const {HashtagRepository,TweetRepository} = require('../repository');

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }
    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        let titleofPresentTags = alreadyPresentTags.map(tag => tag.title);
        let newTags = tags.filter(tag => !titleofPresentTags.includes(tag));
        newTags = newTags.map(tag =>{
            return {title: tag, tweets: [tweet.id]}
        });
        await this.HashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) =>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }
}

// hello i am #ready to go any where in the #country

module.exports = TweetService;  