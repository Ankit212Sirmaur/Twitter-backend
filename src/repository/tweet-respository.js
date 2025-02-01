import { query } from 'express';
import hashtag from '../models/hashtag.js';
import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

export class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async findUserAndDeletable({ userId, _id }) {
        try {
            return await Tweet.findOne({
                _id: _id,
                userId: userId
            });
        } catch (error) {
            console.error('Repository layer find tweet error:', error);
            throw error;
        }
    }
    
    async destroy(tweetId) {
        try {
            return await Tweet.findByIdAndDelete(tweetId);
        } catch (error) {
            console.error('Repository layer delete tweet error:', error);
            throw error;
        }
    }
    
    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id)
                .populate({
                    path: 'comments',
                    populate: {
                        path: 'userId',
                        select: 'name',
                    },
                    populate: {
                        path: 'comments',
                        populate: {
                            path: 'userId',
                            select: 'name',
                        },
                        populate: {
                            path: 'comments',
                            populate: {
                                path: 'userId',
                                select: 'name',
                            },
                        }
                    }
                })
                .lean();  // Convert the Mongoose object to a plain JavaScript object

            return tweet;
        } catch (error) {
            console.log(error);
            return null; // Return null if there's an error
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName({ titleList, offset, limit }) {
        try {
            const Query = {};
            if(titleList) {
                Query.title = titleList;
            }
            const tag = await hashtag.find(Query)  // Query based on title (filter)
                .populate({ path: 'tweets' })
                .skip(offset)
                .limit(limit)
                .lean();

            return tag;
        } catch (error) {
            console.error(error); // Log the error
            throw new Error('Error fetching data from the database');
        }
    };

    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}