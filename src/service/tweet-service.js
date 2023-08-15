const TweetRepository = require('../repository');

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
    }
    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9]+/g); // this regex extracts hashtags
        tags = tags.map((tag) =>{
            tag.subString(1);
        });
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;