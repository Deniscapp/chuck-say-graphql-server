const koa = require('koa');
const graphqlHttp = require('koa-graphql');
const schema = require('./schema/schema');
const PORT = process.env.PORT || 4001

const app = new koa();

app.use(graphqlHttp({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('server started!');
})