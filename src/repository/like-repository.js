import like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(like)
    }
}

export default LikeRepository;