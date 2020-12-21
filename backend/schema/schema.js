
const { gql } = require('apollo-server-hapi');
const typeDefs = gql`

type Price {
    amount: Int!
    currency: String!
  }

  

  type Product {
    id: ID!
    title: String
    slug: String!
    descriptionMarkdown: String
    quantity: Int
    price: Price
    isFeatured:Boolean
    category: String
    images: String
  }

  type ProductList {
    amount: Int!
    offset: Int!
    total: Int
    remaining: Int
    items: [Product]
  }

  type Catalogue {
    id: ID!
    product: ProductList
    title: String!
    metaTitle: String
  }

  type Category {
      name:String
  }
  type Banner {
      text:String
      title:String
      image:String
  }
  type Orders {
    firstName: String!
    lastName: String!
    address: String!
    city: String!
    state: String!
    country: String!
    mobileNumber:Float
    product:String!
  }
  
  type Users {
    firstName: String!
    lastName: String!
    email:String!
    password :String!
  }
  type UserToken
  {
    user:Users
    token:String!

  }

  type Query {
    # Return a catalogue contains list of product
    getCatalogue(amount: Int, offset: Int): Catalogue!

    # Return a product by its id
    getProductById(id: String): Product
    getOrderByEmail(id:String):[Orders]
    getFeaturedProduct:[Product]
    getLatestProduct:[Product]
    getProduct: [Product]
    getCategory:[Category]
    getProductByCategory(name:String,sort:String):[Product]
    getBanners:[Banner]
    getUserById (email: String,password: String): UserToken

  }
  type Mutation {
    addOrder(firstName: String!, lastName: String!, email:String!,address: String!,city: String!, state: String!, country: String!,mobileNumber:Float,product:String!): Orders
    
    addUsers(firstName: String!, lastName: String!, email: String!,password: String!): Users
  }
`;

module.exports =  typeDefs ;