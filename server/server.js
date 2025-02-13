const express = require("express");

//modify server.js to user Apollo Server
const { ApolloServer } = require("apollo-server-express");

const path = require("path");

// get schemas for type defs and reslovers
const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

// we dont need routes anymore!! replaced by  { typeDefs, resolvers }
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//create server from apollo server class
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//apply middleware to the app
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// `routes` is replaced with the ApolloServer above
// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
