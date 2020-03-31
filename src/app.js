import express from 'express'
import { ApolloServer} from 'apollo-server-express'
import mongoose from 'mongoose'
import Fingerprint from'express-fingerprint'
import cors from'cors'
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
app.use(cors())
app.use(Fingerprint({
    parameters:[
        Fingerprint.useragent,
        Fingerprint.acceptHeaders,
        Fingerprint.geoip,
    ]
}))

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req }) => {
        const tokenWithBearer = req.headers.authorization || '';
        let token = tokenWithBearer.split(' ')[1]
        // token = (token ? token.access :'')

        // try to retrieve a user with the token
        const user = contoller.getUser(token);
        // add the user to the context
        return { contextUser:user,fingerprint: req.fingerprint};
      },
});

app.get('/fetch-pdf', async (req, res) => {
    const tokenWithBearer = req.headers.authorization || '';
    let token = tokenWithBearer.split(' ')[1]
    const user = await contoller.getUser(token);
    res.sendFile(`${__dirname}/users/${user.email}/result.pdf`)
})

server.applyMiddleware({
    app,
    path: '/graphql'
});

console.info(`Apollo server running on ${server.graphqlPath}`)

// app.use('/graphql/auth', authRoutes)
module.exports = app