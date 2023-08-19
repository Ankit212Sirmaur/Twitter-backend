import hashtag from '../models/hashtag.js';

export  class HashtagRepository {
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
            const tag = await hashtag.findByIdAndRemove(id);
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

// export default HashtagRepository;