const { GraphQLObjectType, GraphQLString } = require("graphql");
const AdressType = require("./AdressType");

const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: AdressType },
    }),
});

module.exports = UserType;
