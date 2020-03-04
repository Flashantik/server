import express from 'express'
import { ApolloServer} from 'apollo-server-express'
import mongoose from 'mongoose'
// import authRoutes from './routes/auth.routes'
import contoller from "./controllers/auth.controller"


import keys from "./keys"
import schema from './graphql/schema.js'
import resolvers from './graphql/resolver.js'




mongoose.connect(keys.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.error("Connection failed", err))
dbConnection.once('open', () => console.log('Connected to DB'))

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req }) => {
        const tokenWithBearer = req.headers.authorization || '';
        const token = tokenWithBearer.split(' ')[1]
        // try to retrieve a user with the token
        const user = contoller.getUser(token);  
        // add the user to the context
        return { contextUser:user };
      },
});

server.applyMiddleware({
    app,
    path: '/graphql'
});

console.info(`Apollo server running on ${server.graphqlPath}`)

// app.use('/graphql/auth', authRoutes)
module.exports = app