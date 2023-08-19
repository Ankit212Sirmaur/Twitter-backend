import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }
    async finduserAndLikeable(data){
        try {
            const result = await Like.findOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default LikeRepository;