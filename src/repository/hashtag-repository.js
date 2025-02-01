import hashtag from '../models/hashtag.js';

export class HashtagRepository {
    async create(data) {
        try {
            const tag = await hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await hashtag.insertMany(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag = await hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const tag = await hashtag.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList, offset, limit) {
        try {
            const tag = await hashtag.find({
                title: titleList
            }).populate({ path: 'tweets' })
                .skip(offset).limit(limit);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByTweetId(tweetId){
        try {
            return await hashtag.find({
                tweets: tweetId,
            })
        } catch (error) {
            throw error;
        }
    }
}

// export default HashtagRepository;