//follow instructions

const { gql } = require("apollo-server-express");

// Define the necessary Query and Mutation types
//whatever comes after the colon in the mutation is the type that is being returned
// (type User is being returned in saveBook and removeBook)
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    title: String!
    image: String
    link: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String!
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
