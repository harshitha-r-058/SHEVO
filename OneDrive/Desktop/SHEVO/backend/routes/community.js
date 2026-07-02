const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get('/posts', async (req, res) => {
    const posts = await Post.find().populate('author', 'uniqueDisplayID').sort({ createdAt: -1 });
    res.json(posts);
});
router.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
});
module.exports = router;