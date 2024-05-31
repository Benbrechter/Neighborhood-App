const {Post, Item, User, Comment} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
   Mutations: {
    addUser: async (parent, {username, email, pasword}) => {
        const user = await User.create({username, email, password});
        const token = signToken(user);

        return {token, user};
    },
    
   }
}
