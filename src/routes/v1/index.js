import express from "express";
import { createTweet, getTweet, deleteTweet, getTweetBasedonHashtag } from '../../controllers/tweet-controller.js'
import { toogleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { SignUp, login } from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";
import { uploadMiddleware } from "../../config/file-upload-config.js";

const router = express.Router();

router.post('/tweets', [uploadMiddleware, authenticate], createTweet);

router.delete('/tweets/:id', authenticate, deleteTweet);

router.post('/likes/toggle', toogleLike);

router.post('/comments', authenticate, createComment);

router.get('/tweets/:id', getTweet);

router.post('/signup', SignUp);

router.post('/login', login);

router.post('/get/tweets', getTweetBasedonHashtag);

export default router;
