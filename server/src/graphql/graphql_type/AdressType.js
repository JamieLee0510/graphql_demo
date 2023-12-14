const { GraphQLObjectType, GraphQLString } = require("graphql");

const AdressType = new GraphQLObjectType({
    name: "Adress",
    fields: () => ({
        street: { type: GraphQLString },
        city: { type: GraphQLString },
    }),
});

module.exports = AdressType;
