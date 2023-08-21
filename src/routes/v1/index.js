import express from "express";
import {createTweet, getTweet} from '../../controllers/tweet-controller.js'
import { toogleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { SignUp } from "../../controllers/auth-controller.js";

const router  = express.Router();
 
router.post('/tweets', createTweet);

router.post('/likes/toggle', toogleLike);

router.post('/comments', createComment);

router.get('/tweets/:id',  getTweet);

router.post('/signup',  SignUp);

export default router;
