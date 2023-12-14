const express = require("express");
const cors = require("cors");
const { createHandler } = require("graphql-http/lib/use/http");

const schema = require("./graphql/schema");

const app = express();
app.use(cors());

app.all("/graphql", createHandler({ schema }));

app.listen(4000, () => {
    console.log("GraphQL server is running");
});
