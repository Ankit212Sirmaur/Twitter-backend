import LikeService from "../service/like-service.js";

const likeService = new LikeService();
export const toogleLike = async (req, res) =>{
    try {
        const response = await likeService.toogleLike(req.query.modelId, req.query.modelType, req.body.userId);
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
