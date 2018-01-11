import koa from'koa';
import graphqlHttp from 'koa-graphql';
import schema from '../lib/schema';
const PORT = process.env.PORT || 4001

const app = new koa();

app.use(graphqlHttp({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('server started!');
})