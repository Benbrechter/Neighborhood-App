const seedItem = require('./itemSeeds');
const seedPost = require('./postSeeds');
const seedUser = require('./userSeeds');

const db = require('../config/connection');
const { Item, Post, User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Item', 'items');
    await cleanDB('Post', 'posts');
    await cleanDB('User', 'users');

    await seedUser();
    await seedPost();
    await seedItem();
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
  } catch (err) {
    console.error(err);
  }
});

// const seedAll = async () => {
//   //await sequelize.sync({ force: true });

//   await seedUser();
//   await seedPost();
//   await seedComment();
//   await seedItem();

//   process.exit(0);
// };
