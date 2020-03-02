import express from 'express'
// import graphqlHTTP from 'express-graphql'
const { ApolloServer, gql } = require('apollo-server-express');
import schema from './graphql/schema.js'
import resolvers from './graphql/resolver.js'
 
 
const server = new ApolloServer({ typeDefs:schema, resolvers });
 
const app = express();
server.applyMiddleware({ app, path:'/graphql'});

console.info(`Apollo server running on ${server.graphqlPath}`)
module.exports = app
