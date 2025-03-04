
import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) =>{
    try {
        console.log(req.query, req.body, req.user.id, req.body.content);
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully toggled Like'
        })
    } catch (error) {
        res.status(500).json({
           success: false,
           data: {},
           message: 'Something went wrong',
           err: error, 
        })
    }
}