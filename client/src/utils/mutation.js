import {gql} from '@apollo/client';

export  const LOGIN_USER = gql`
mutation login($username: String!, $email: String!, $password: String!) {
  login(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_POST = gql`
mutation Mutation($postText: String!, $title: String!) {
  addPost(postText: $postText, title: $title) {
    _id
    category
    username
    title
    postText
    image
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`
export const DELETE_POST = gql`
mutation DeletePost($id: ID!) {
  deletePost(_id: $id) {
    _id
    username
    email
    zipcode
    password
    friends {
      _id
      username
      email
      zipcode
      password
    }
    posts {
      _id
      category
      username
      title
      postText
      image
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
}
`
