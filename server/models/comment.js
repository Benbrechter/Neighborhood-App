const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentText: {
     type: String,
     required: true,
     minlength: 1,
     maxlength: 400,
    },
    userId: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      postsId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      },
    createdAt: {
     type: Date,
     default: Date.now,
     //need to add date format in utils
    },
});

// {
//     commentText: "I agree with you!",
//     user_id: 2,
//     post_id: 2,
//   }

// const Comment = model('Comment', commentSchema);

module.exports = commentSchema;
