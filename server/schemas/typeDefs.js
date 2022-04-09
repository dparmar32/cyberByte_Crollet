const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String
    coinCount: Int
    savedCoins: [Coin]
  }

  type Coin {
    coinId: ID!
<<<<<<< HEAD
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
=======
    rank: Int
    Symbol: String
    name: String
    priceUsd: String
>>>>>>> 0c25341b6ae6ed62759686e46fb4adcc387852b4
  }

  type Auth {
    token: ID!
    user: User
  }

<<<<<<< HEAD
  input coinInput {
    id: [String]
    rank: Number
    coinId: Number
    symbol: String
    priceUSD: String
    explorer: String
    supply: Number
    maxSupply: Number
    marketCapUsd: Number
    volumeUsd24Hr: Number
    priceUsd: Number
    changePercent24Hr: Number
    vwap24Hr: Number
=======
  input CoinInput {
    rank: String
    Symbol: String!
    coinId: String!
    priceUsed: String
    name: String!
>>>>>>> 0c25341b6ae6ed62759686e46fb4adcc387852b4
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
<<<<<<< HEAD
    addUser(username: String!, email: String!, password: String!): Auth
    savedCoins(coinData: coinInput!): User
    removeCoin(coinId: ID!): User
=======
    addUser(name: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
>>>>>>> 41927253eaffb3ab2963cc642f1ac3ec3cee14d7
=======
    saveCoin(coinData: CoinInput!): User
    removeCoin(coinId: ID!): User
>>>>>>> 0c25341b6ae6ed62759686e46fb4adcc387852b4
  }
`;

module.exports = typeDefs;

// changed bookinput to coininput review 
