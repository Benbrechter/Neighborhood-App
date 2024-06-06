const { Post } = require("../models");

const postData = [
  {
    category: "Help",
    username: "user1",
    title: "First Blog Post",
    postText: "This is the content of the first blog post.",
    user_id: 1,
    comments: [{
      commentText: "Great article!",
      user_id: "1",
      post_id: "1",
  }]
  },
  {
    category: "Help",
    username: "user2",
    title: "Second Blog Post",
    postText: "This is the content of the second blog post.",
    user_id: 2,
    comments: [{
      commentText: "Great article!",
      user_id: "1",
      post_id: "1",
  }]
  },
  {
    category: "Help",
    username: "user3",
    title: "Third Blog Post",
    postText: "This is the content of the third blog post.",
    user_id: 3,
    comments: [{
      commentText: "Great article!",
      user_id: "1",
      post_id: "1",
  }]
  },
  {
    category: "Help",
    username: "user4",
    title: "Fourth Blog Post",
    postText: "This is the content of the fourth blog post.",
    user_id: 4,
    comments: [{
      commentText: "Great article!",
      user_id: "1",
      post_id: "1",
  }]
  },
  {
    category: "Help",
    username: "user5",
    title: "Fifth Blog Post",
    postText: "This is the content of the fifth blog post.",
    user_id: 5,
    comments: [{
      commentText: "Great article!",
      user_id: "1",
      post_id: "1",
  }]
  }
];

// const seedPosts = async () => {
//   try {
//     await Post.deleteMany({});
//     await Post.insertMany(itemData);
//     console.log('Posts seeded successfully!');
//   } catch (err) {
//     console.error(err);
//   }
// };

const seedPost = () => Post.create(postData);

module.exports = seedPost;