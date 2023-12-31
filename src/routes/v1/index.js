import express from "express";
import {createTweet, getTweet} from '../../controllers/tweet-controller.js'
import { toogleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { SignUp, login } from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";

const router  = express.Router();
 
router.post('/tweets', createTweet);

router.post('/likes/toggle', toogleLike);

router.post('/comments',authenticate, createComment);

router.get('/tweets/:id',  getTweet);

router.post('/signup',  SignUp);

router.post('/login', login);

export default router;
