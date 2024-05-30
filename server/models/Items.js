const { Schema, model } = require('mongoose');

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

const Item = model('Item', itemsSchema)

module.exports = Item;