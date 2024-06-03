const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    zipcode: String!
    friends: [User]
    posts: [Post]

}

type Comment {
   _id: ID 
   commentText: String!
   createdAt: String  
}

type Item {
    _id: ID 
    description: String!
    image: String
}

type Post {
    _id: ID
    category: String!
    username: String!
    title: String!
    postText: String!
    postText: String!
    image: String
    createdAt: Date
    comments: [Comment]
}

type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User 
    getAllPosts: [Post] : [Post]
    getAllCommunity:[Post]
    getAllItems: [Items]
  }

  type Mutations {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
    addPost(body: String!, title: String!): Post!
    addItem(desctiption: String!, image: String): Item!
    updateItem(description: String!, image: String): User
    updatePost(body: String!, title: String!):User
    deletePost(_id: ID!):User
    deleteItem(_id: ID!): User
  }
`
module.exports = typeDefs