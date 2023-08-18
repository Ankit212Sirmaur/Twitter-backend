import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Commet'],
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, {timestamps: true});

const like = mongoose.model('Like', likeSchema);

export default like;