const { Schema } = require('mongoose');

const itemsSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  itemsId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = itemsSchema;