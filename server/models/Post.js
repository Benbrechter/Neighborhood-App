const { Schema, model} = require('mongoose');
const commentSchema = require('./comment')

const postSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    postText: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
        //need to add date format in utils
    },
    comments: [commentSchema]
});

const Post = model('Post', postSchema);


module.exports = Post