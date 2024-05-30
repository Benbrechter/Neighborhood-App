const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
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
    }
   
});

const Comment = model('Comment', commentSchema)

module.exports = Comment;
