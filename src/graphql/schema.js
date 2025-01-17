import { gql } from 'apollo-server-express';

export default gql `
  type Query {
    getUserByToken(token: String): User!
    login(user: inputUserLogin): User
    getUserData(token: String!):User
  }


  type Mutation {
    createUser(user: inputUser): User
    refreshToken(refreshToken:String!): Tokens
    logout(refreshToken:String!): Boolean
    setDisabledSidebar(disabledSidebar: [Boolean]!): [Boolean]
    checkTest(answers:[Answers]!): String
    setDoneStep(page:String!, items: [Boolean!]!): DoneObject
  }

  type DoneObject{
    page: String!
    items: [Boolean!]!
  } 
  input Element{
    title: String
    id: Int
  }
  input Answers {
    element: Element
    id: Int
  }
  type Tokens{
    access: String!
    refresh: String!
  }
  type refresh {
    token:String
  }
  type User{
    id: ID
    name: String
    email: String
    lastname: String
    phone: String
    token: String
    refresh:String
    disabledSidebar: [Boolean!]
  }
  input inputUserLogin{
    email: String!
    password: String!
  }
  input inputUser{
    name: String!
    lastname: String!
    phone: String!
    email: String!
    password: String!
  }
`;