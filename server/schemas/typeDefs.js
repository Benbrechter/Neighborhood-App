const typeDefs = `
type User {
    username: String!
    email: String!
    password: String!
    zipcode: String!
    svaedUsers: [User
        
    ]

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
    title: String!
    postText: String!
    postText: String!
    image: String
    createdAt: Date
    comments: [Comment]
}
`