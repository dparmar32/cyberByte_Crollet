const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
<<<<<<< HEAD
    email: String
    coinCount: Int
=======
    email: String!
    coinCount: String
>>>>>>> 4dfeabc668375197b80873d4349640ac081da2a6
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
  }

  type Auth {
    token: ID!
    user: User
  }

  input CoinInput {
    rank: String
    symbol: String
    coinId: String!
    priceUsd: String!
    name: String!
    changePercent24Hr: String
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
