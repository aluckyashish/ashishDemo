const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const ProductModel = require('../models/products').Products;
const CategoryModel = require('../models/category').CategoryP;
const BanneModel = require('../models/banner').Banners
const OrderModel = require('../models/orders').Orders;
const UserModel = require('../models/users').Users;

const resolvers = {
    Query: {
      getProduct() {
        return ProductModel.find()
      },
      getCategory() {
        return CategoryModel.find();
      },
      getProductByCategory(_, { name, sort }) {
        let sortIndex;
         if(sort == "highest") { sortIndex = -1 }
        else {
          sortIndex = 1;
        }
        return ProductModel.find({ "category": { $regex: name, $options: 'i' } }).sort({ "price.amount": sortIndex });
      },
  
      getBanners() {
        return BanneModel.find();
      },
      getFeaturedProduct() {
        return ProductModel.find({ isFeatured: true }).limit(8)
      },
      getLatestProduct() {
        return ProductModel.find({ isLatest: true }).limit(8)
      },
      getProductById(_, { id }) {
        return ProductModel.findOne({ "id": id })
      },
      getOrderByEmail(_, { id }) {
        return OrderModel.find({ "email": id })
      },
  
  
      async getUserById(_, { email, password }) {
        const user = await UserModel.findOne({ "email": email })
        if (!user) {
          throw new Error('No such user found')
        }
        let npassword = await bcrypt.hashSync(password, 10);
  
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
          throw new Error('Invalid password')
        }
        const token = jwt.sign({ userId: user.email }, 'demoEcommerce')
  
        return {
          token,
          user,
        }
  
      }
  
    },
    Mutation: {
      addOrder: (parent, args) => {
        let orders = new OrderModel({
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
      addUsers: async (parent, args) => {
        let userPassword = bcrypt.hashSync(args.password, 10);
        let users = new UserModel({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: userPassword
        });
  
        const user = await UserModel.findOne({ "email": args.email })
        if (user) {
          throw new Error('Email Id already registered')
        } else {
  
          return users.save();
        }
      }
  
    }
  
  };

module.exports =  resolvers ;