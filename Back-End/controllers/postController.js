const Post = require('../models/postModel');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new post
const createPost = async (req, res) => {
  try {
    const { user, type, title, link, toolsUsed, artistName, filters, description } = req.body;
    const post = new Post({
      user,
      type,
      title,
      link,
      toolsUsed,
      artistName,
      filters,
      description,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing post
const updatePost = async (req, res) => {
  try {
    const { user, type, title, link, toolsUsed, artistName, filters, description } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.user = user || post.user;
    post.type = type || post.type;
    post.title = title || post.title;
    post.link = link || post.link;
    post.toolsUsed = toolsUsed || post.toolsUsed;
    post.artistName = artistName || post.artistName;
    post.filters = filters || post.filters;
    post.description = description || post.description;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};  