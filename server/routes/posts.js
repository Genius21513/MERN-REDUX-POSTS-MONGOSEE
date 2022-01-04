
import express from 'express';

import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;