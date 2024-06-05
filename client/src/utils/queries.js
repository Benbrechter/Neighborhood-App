import {gql} from '@apollo/client';

export const QUERY_COMMUNITY = gql`
query GetAllCommunity {
    getAllCommunity {
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

export const QUERY_ITEMS = gql`
query GetAllItems {
    getAllItems {
      _id
      description
      image
    }
  }`

  export const QUERY_POST = gql`
  query GetAllPosts {
    getAllPosts {
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
  export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      zipcode
      friends {
        _id
        username
        email
        zipcode
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
