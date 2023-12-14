const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const { userResolver } = require("./graphql_resolver/userResolver");
const UserType = require("./graphql_type/UserType");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: userResolver.user,
        },
    },
});

module.exports = new GraphQLSchema({ query: RootQuery });
