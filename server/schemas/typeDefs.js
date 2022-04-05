const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    coinCount: Int
    savedCoins: [Coin]
  }

  type Coin {
    coinId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

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
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedCoins(coinData: coinInput!): User
    removeCoin(coinId: ID!): User
  }
`;

module.exports = typeDefs;

// changed bookinput to coininput review 
