const db = require('../config/connection');
const { User, Post, Item, Comment } = require('../models');
const postSeeds = require('./postsSeedData.json');
const itemsSeeds = require('./itemsSeedData.json');
const commentSeeds = require('./commentsSeedData.json');
const usersSeeds = require('./usersSeedData.json');

db.once('open', async () => {
  try {

   //seed users
   const users = await User.create(usersSeeds);

   //seed posts

   const posts = await Post.create(postSeeds);

   //seed items
   const items = await Item.create(itemsSeeds);

   //seed comments
   const comments = await Comment.create(commentSeeds);

    console.log('Data seeded succsessfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});