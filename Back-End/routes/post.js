const express = require('express');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

// get all posts
router.get('/', getAllPosts);

// get a single post by ID
router.get('/:id', getPostById);

// create a new post
router.post('/', createPost);

// update an existing post
router.patch('/:id', updatePost);

// delete a post
router.delete('/:id', deletePost);

module.exports = router;