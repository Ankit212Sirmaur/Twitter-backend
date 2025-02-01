import { HashtagRepository, TweetRepository, UserRepository, CommentRepository } from '../repository/index.js'

class TweetService {
    constructor() {
        this.TweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
        this.UserRepository = new UserRepository();
        this.CommentRepository = new CommentRepository();
    }
    async create(data) {
        const tweet = await this.TweetRepository.create(data);
        const User = await this.UserRepository.findById(data.userId);

        User.tweetId.push(tweet._id);
        const content = data.content;
        await User.save();

        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase());
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        let titleofPresentTags = alreadyPresentTags.map(tag => tag.title);
        let newTags = tags.filter(tag => !titleofPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        });
        await this.HashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }
    async get(tweetId) {
        const tweet = await this.TweetRepository.getWithComments(tweetId);
        return tweet;
    }

    async  deleteTweet(tweetId, userId) {
        try {
            if (!tweetId || !userId) {
                throw new Error('Tweet ID and User ID are required');
            }
            console.log(tweetId, userId);
            const tweet = await this.TweetRepository.findUserAndDeletable({
                userId: userId,
                _id: tweetId
            });
            if (!tweet) {
                throw new Error('Tweet not found or user not authorized');
            }
            const deletedTweet = await this.TweetRepository.destroy(tweetId);
            const currUser = await this.UserRepository.findById(userId);
            currUser.tweetId.pull(tweetId);
            await currUser.save();
            return deletedTweet;
        } catch (error) {
            console.error('Service layer delete tweet error:', error);
            throw error;
        }
    }

    async getByName(filter, offset, limit) {
        const tweet = await this.TweetRepository.findByName(filter, offset, limit);
        return tweet;
    }
}

export default TweetService;
