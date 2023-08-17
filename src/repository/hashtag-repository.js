const hashtag = require('../models/hashtag');

class HashtagRepository {
    async create(data){
        try {
            const tag = await hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data){
        try {
            const tag = await hashtag.insertMany(data);
            return tag;
        } catch (error) {
            console.log(error); 
        }
    }
    async get(id){
        try {
            const tag = await hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const tag = await hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList){
        try {
            const tag = await hashtag.find({
                title: titleList
            });
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;