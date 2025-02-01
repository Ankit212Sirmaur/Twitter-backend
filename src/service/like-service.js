import {LikeRespository,TweetRepository} from "../repository/index.js";

export default class LikeService{
    constructor(){
        this.LikeRespository = new LikeRespository();
        this.TweetRepository = new TweetRepository();
    }
    async toogleLike(modelId, modelType, userId){
         if(modelType ===  'Tweet'){
            var likeable = await this.TweetRepository.find(modelId);
         }else if( modelType == 'Comment'){
            // TODO 
         }else{
            throw new Error('unkown model type');
         }
         const exits = await this.LikeRespository.finduserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId,
         });

         if(exits){
            likeable.likes.pull(exits.id);
            await likeable.save();
            await exits.remove();
            var isAdded = false;
        }else {
            const newLike = await this.LikeRespository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
         }
         return isAdded;
    }
}