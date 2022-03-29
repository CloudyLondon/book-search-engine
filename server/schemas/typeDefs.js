//follow instructions

const { gql } = require("apollo-server-express");

// Define the necessary Query and Mutation types
const typeDefs = gql`
type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  },

type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    saveBook:
    removeBook:
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  },

  type Book {
    _id: ID
    authors: String []
    title: String
    image: 
    link:
  },

  type Auth {
    token:
    user: 
  },

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;
