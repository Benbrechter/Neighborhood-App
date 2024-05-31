const db = require('../config/connection');
const { User, Post, Item, Comment } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const postSeeds = require('./postsSeedData.json');
const itemsSeeds = require('./itemsSeedData.json');
const commentSeeds = require('./commentsSeedData.json');
const usersSeeds = require('./usersSeedData.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
   //clean DB
   await cleanDB();

   //seed users
   const users = await User.create(usersSeedData);

   //seed posts
   const posts = await Post.create(postSeeds);

   //seed items
   const items = await Items.create(itemsSeeds);

   //seed comments
   const comments = await Comments.create(commentSeeds);

    console.log('Data seeded succsessfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});