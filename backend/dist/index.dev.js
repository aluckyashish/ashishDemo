'use strict';

var Hapi = require('@hapi/hapi');

var Mongoose = require("mongoose");

var _require = require('apollo-server-hapi'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

Mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var resolvers = require('./resolver/index');

var typeDefs = require('./schema/schema');

function StartServer() {
  var server, app;
  return regeneratorRuntime.async(function StartServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          server = new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers
          });
          app = new Hapi.server({
            port: 4000
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(server.applyMiddleware({
            app: app
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(server.installSubscriptionHandlers(app.listener));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(app.start());

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

StartServer()["catch"](function (error) {
  return console.log(error);
});