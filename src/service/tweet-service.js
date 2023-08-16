const {HashtagRepository,TweetRepository} = require('../repository');

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }
    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9]+/g); // this regex extracts hashtags
        tags = tags.map((tag) =>{
            tag.subString(1);
        });
        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags = await this.HashtagRepository.findByName(tags).map(tag => tag.title);
        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        newTags = newTags.map(tag =>{
            return {title: tag, tweets: [tweet.id]}
        });
        const response = await this.HashtagRepository.bulkCreate(newTags);
        return tweet;

    }
}

module.exports = TweetService;