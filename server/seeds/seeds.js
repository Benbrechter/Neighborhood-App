const db = require('../config/connection');
const { User, Post, Item, Comment } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
   

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});