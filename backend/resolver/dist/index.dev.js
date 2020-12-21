"use strict";

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var ProductModel = require('../models/products').Products;

var CategoryModel = require('../models/category').CategoryP;

var BanneModel = require('../models/banner').Banners;

var OrderModel = require('../models/orders').Orders;

var UserModel = require('../models/users').Users;

var resolvers = {
  Query: {
    getProduct: function getProduct() {
      return ProductModel.find();
    },
    getCategory: function getCategory() {
      return CategoryModel.find();
    },
    getProductByCategory: function getProductByCategory(_, _ref) {
      var name = _ref.name,
          sort = _ref.sort;
      var sortIndex;

      if (sort == "highest") {
        sortIndex = -1;
      } else {
        sortIndex = 1;
      }

      return ProductModel.find({
        "category": {
          $regex: name,
          $options: 'i'
        }
      }).sort({
        "price.amount": sortIndex
      });
    },
    getBanners: function getBanners() {
      return BanneModel.find();
    },
    getFeaturedProduct: function getFeaturedProduct() {
      return ProductModel.find({
        isFeatured: true
      }).limit(8);
    },
    getLatestProduct: function getLatestProduct() {
      return ProductModel.find({
        isLatest: true
      }).limit(8);
    },
    getProductById: function getProductById(_, _ref2) {
      var id = _ref2.id;
      return ProductModel.findOne({
        "id": id
      });
    },
    getOrderByEmail: function getOrderByEmail(_, _ref3) {
      var id = _ref3.id;
      return OrderModel.find({
        "email": id
      });
    },
    getUserById: function getUserById(_, _ref4) {
      var email, password, user, npassword, valid, token;
      return regeneratorRuntime.async(function getUserById$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _ref4.email, password = _ref4.password;
              _context.next = 3;
              return regeneratorRuntime.awrap(UserModel.findOne({
                "email": email
              }));

            case 3:
              user = _context.sent;

              if (user) {
                _context.next = 6;
                break;
              }

              throw new Error('No such user found');

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(bcrypt.hashSync(password, 10));

            case 8:
              npassword = _context.sent;
              _context.next = 11;
              return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

            case 11:
              valid = _context.sent;

              if (valid) {
                _context.next = 14;
                break;
              }

              throw new Error('Invalid password');

            case 14:
              token = jwt.sign({
                userId: user.email
              }, 'demoEcommerce');
              return _context.abrupt("return", {
                token: token,
                user: user
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  Mutation: {
    addOrder: function addOrder(parent, args) {
      var orders = new OrderModel({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        address: args.address,
        city: args.city,
        state: args.state,
        country: args.country,
        mobileNumber: args.mobileNumber,
        product: args.product
      });
      return orders.save();
    },
    addUsers: function addUsers(parent, args) {
      var userPassword, users, user;
      return regeneratorRuntime.async(function addUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userPassword = bcrypt.hashSync(args.password, 10);
              users = new UserModel({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: userPassword
              });
              _context2.next = 4;
              return regeneratorRuntime.awrap(UserModel.findOne({
                "email": args.email
              }));

            case 4:
              user = _context2.sent;

              if (!user) {
                _context2.next = 9;
                break;
              }

              throw new Error('Email Id already registered');

            case 9:
              return _context2.abrupt("return", users.save());

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};
module.exports = resolvers;