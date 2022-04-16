const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    coinCount: String
    savedCoins: [Coin]
  }

  type Coin {
    coinId: ID!
    rank: String
    symbol: String
    name: String
    priceUsd: String
    changePercent24Hr: String
    explorer: String

    authors: [String]
    description: String
    image: String
    link: String
    title: String!

    rank: Int
    Symbol: String
    name: String
    priceUsd: String

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

  input CoinInput {
    rank: String
    symbol: String
    coinId: String!
    priceUsd: String!
    name: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedCoins(coinData: coinInput!): User
    removeCoin(coinId: ID!): User
    addUser(name: String!, email: String!, password: String!): Auth
    saveCoin(coinData: CoinInput!): User
    removeCoin(coinId: ID!): User
  }
`;

module.exports = typeDefs;


