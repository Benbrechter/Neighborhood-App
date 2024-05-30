const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    category: {
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
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 400,
            },
            createdAt: {
                type: Date,
                default: Date.now
                //need to add date format in utils
            },
        },
    ],
});

const Post = model('Post', postSchema);

module.exports = Post