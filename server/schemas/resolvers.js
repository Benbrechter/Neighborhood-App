const {Post, Item, User} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
   Query: {
    me: async (parent, args, context ) => {
        if(context.user){
            const user = await User.findById(context.user._id).populate('friends').populate('posts')
            return user
        }
        throw AuthenticationError
    },
    getAllPosts: async () => {
        const posts = await Post.find()

        return posts
    },
    getAllCommunity: async () => {
        const posts = await Post.find({category: 'community'})

        return posts
    },
    getAllItems: async () => {
        const items = await Item.find()

        return items
    }
   },

   Mutations: {
    addUser: async (parent, {username, email, password}) => {
        const user = await User.create({username, email, password});
        const token = signToken(user);

        return {token, user};
    },
    login: async (parent, {username, email, password}) => {
        const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
        if (!user) {
          throw AuthenticationError;
        }  
        
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw AuthenticationError
          }
          const token = signToken(user);
          return {token, user} 

    },
    addPost: async (parent, args, context) => {
        if(context.user) {
          const post = await Post.create({...args, username: context.user.username})
          const user = await User.findByIdAndUpdate(context.user._id, {$push: {posts: post._id}}, {new: true})
          
          return post
        }
        throw AuthenticationError
    },
    addItem: async (parent, args, context) => {
        if(context.user){
            const item = await Item.create({...args})

            return item
        }
        throw AuthenticationError
    },
    updateItem: async (parent, args, context) => {
        if(context.user){
            const item = await Item.findByIdAndUpdate(context.user._id, args, {new: true})
            return item
        }
        throw AuthenticationError
    },
    updatePost: async (parent, args, context) => {
        if(context.user){
            const post = await Post.findByIdAndUpdate(context.user._id, args, {new: true})
            const user = await User.findByIdAndUpdate(context.user._id, {$push: {posts: post._id}}, {new: true})
            return post
        }
        throw AuthenticationError
    },
    deletePost: async (parent, context) => {
        if(context.user){
            const deletedPost = await Post.findByIdAndDelete(context.user._id)
            const user = await User.findByIdAndUpdate(context.user._id, {$push: {posts: post._id}}, {new: true})
            return deletedPost
        }
        throw AuthenticationError
    },  
    deleteItem: async (parent, context) => {
        if(context.user){
            const deletedItem = await Item.findByIdAndDelete(context.user._id)
            return deletedItem
        }
        throw AuthenticationError
    }

   }
}

module.exports = resolvers
