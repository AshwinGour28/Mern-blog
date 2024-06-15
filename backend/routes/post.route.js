import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
<<<<<<< HEAD
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';
=======
import { create, deletepost, getposts } from '../controllers/post.controller.js';
>>>>>>> 15663e43ab85c762921ee9b880ec14b4474954ff

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getposts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
<<<<<<< HEAD
router.put('/updatepost/:postId/:userId', verifyToken, updatepost);
=======
>>>>>>> 15663e43ab85c762921ee9b880ec14b4474954ff

export default router;