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
    rank: Int
    Symbol: String
    name: String
    priceUsd: Int
    changePercent24Hr: Int
    explorer: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input CoinInput {
    rank: String
    Symbol: String!
    coinId: String!
    priceUsd: Int!
    name: String!
    changePercent24Hr: Int
    explorer: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveCoin(coinData: CoinInput!): User
    removeCoin(coinId: ID!): User
  }
`;

module.exports = typeDefs;
