const {
  gql
} = require('apollo-server-express')

module.exports = gql `
  type Query {
    getUser(token: ID): User!
  }
  type Mutation {
    createUser(user: inputUser): User
  }

  type User{
    id: ID
    name: String
    email: String
    password: String
  }
  input inputUser{
    name: String!
    email: String!
    password: String!
  }
`;