const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;
const fetch = require('node-fetch');

const ChuckNorrisFact = new GraphQLObjectType({
    name: 'Fact',
    fields: {
        id: { type: GraphQLString },
        url: { type: GraphQLString },
        value: { type: GraphQLString },
        icon_url: { type: GraphQLString  },
        category: { type: new GraphQLList(GraphQLString) }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        fact: {
            type: new GraphQLList(ChuckNorrisFact),
            args: { text: { type: GraphQLString } },
            async resolve(parentValue, { text }) {
                let res;
                try {
                    res = await fetch(`https://api.chucknorris.io/jokes/search?query=${text}`);
                } catch (err) {
                    throw new Error(err);
                }

                let data;
                try {
                    data = await res.json();
                } catch (err) {
                    throw new Error(err);
                }
                
                return data.result;
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery })