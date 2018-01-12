import koa from'koa';
import graphqlHttp from 'koa-graphql';
import { schema } from './schema';

const PORT = process.env.PORT || 3000

const app = new koa();

app.use(graphqlHttp({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('server started!');
})