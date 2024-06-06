const { Item } = require("../models");

const itemData = [
    {
      description: 'A beautiful painting',
      image: 'https://example.com/images/painting.jpg',
    },
    {
      description: 'A vintage lamp',
      image: 'https://example.com/images/lamp.jpg',
    },
    {
      description: 'A classic novel',
      image: 'https://example.com/images/novel.jpg',
    },
    {
      description: 'A modern sculpture',
      image: 'https://example.com/images/sculpture.jpg',
    },
    {
      description: 'An antique clock',
      image: 'https://example.com/images/clock.jpg',
    },
    {
      description: 'A rare coin',
      image: 'https://example.com/images/coin.jpg',
    },
    {
      description: 'A historic map',
      image: 'https://example.com/images/map.jpg',
    }
];

const seedItem = () => Item.create(itemData);

module.exports = seedItem;