const { User } = require("../models");

const userData = [
    {
        username: "user1",
        email: "user1@example.com",
        password: "password1",
        zipcode: "12345",
    },
    {
        username: "user2",
        email: "user2@example.com",
        password: "password2",
        zipcode: "12345",
      },
      {
        username: "user3",
        email: "user3@example.com",
        password: "password3",
        zipcode: "12345",
      },
      {
        username: "user4",
        email: "user4@example.com",
        password: "password4",
        zipcode: "12345",
      },
      {
        username: "user5",
        email: "user5@example.com",
        password: "password5",
        zipcode: "12345",
      },
];

const seedUsers = () => User.create(userData);

module.exports = seedUsers;