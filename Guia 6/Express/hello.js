let express = require('express');
let { graphqlHTTP } = require('express-graphql')
let { buildSchema } = require('graphql')

let schema = buildSchema(`
    type Query {
        hello: String
    }
`)

let root = { hello: () => 'Hello world!' }

let app = express()

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, ()=>{ console.log("server at: localhost:3000/graphql") })