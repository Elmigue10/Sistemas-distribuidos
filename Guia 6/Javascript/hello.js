let { graphql, buildSchema } = require('graphql')

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let rootResolver = { hello: () => 'Hello world!' }

graphql(schema, '{ hello }', rootResolver)
  .then((response) => {
    console.log(response)
  }
)