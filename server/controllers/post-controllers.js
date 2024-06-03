const { Post }  = require('../models');

module.exports = {
// Create a new post
async createPost(req, res) {
    const { title, content, user } = req.body;

    try {
        const newPost = new Post({
            title,
            content,
            user,
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create post' });
    }
},

// Get all posts
async getAllPosts(req, res) {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
},

// Get a single post by ID
async getPostById(req, res) {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
},

// Update a post
async updatePost(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update post' });
    }
},

// Delete a post
async deletePost(req, res) {
    const { id } = req.params;

    try {
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
}

}
