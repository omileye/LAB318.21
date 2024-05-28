const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('author').populate('post');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create a new comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        author: req.body.author,
        post: req.body.post,
    });
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update comment
router.put('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find comment' });
        }

        if (req.body.content != null) {
            comment.content = req.body.content;
        }

        const updatedComment = await comment.save();
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find comment' });
        }

        await comment.remove();
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
