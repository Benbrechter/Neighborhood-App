const router = require('express').Router();

const {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
} = require('../../controllers/post-controllers');

const {authMiddleware} = require('../../utils/auth');

router.route('/').get(getAllPosts)

router.route('/').post(createPost, authMiddleware)

router.route('/:postId').put(updatePost, authMiddleware)

router.route('/:postId').delete(deletePost, authMiddleware)

module.exports = router

