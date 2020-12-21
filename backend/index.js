'use strict';
const Hapi = require('@hapi/hapi');
const Mongoose = require("mongoose");
const { ApolloServer, gql } = require('apollo-server-hapi');

Mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });

const resolvers=require('./resolver/index')

const typeDefs=require('./schema/schema')

async function StartServer() {
  const server = new ApolloServer({ typeDefs, resolvers })

  const app = new Hapi.server({
    port: 4000
  });

  await server.applyMiddleware({
    app,
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();
}

StartServer().catch(error => console.log(error));