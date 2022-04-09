import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// Update the information to match the params from the schema for coins
export const SAVE_COIN = gql`
  mutation saveCoin($coinData: coinInput!) {
    saveCoin(coinData: $coinData) {
      _id
      username
      email
      savedCoins {
        coinId
        rank
        symbol
        priceUSD
        explorer
        supply
        maxSupply
        marketCapUsd
        volumeUsd24Hr
        priceUsd
        changePercent24Hr
        vwap24HR
        link
      }
    }
  }
`;

export const REMOVE_COIN = gql`
  mutation removeCoin($coinId: ID!) {
    removeCoin(coinId: $coinId) {
      _id
      name
      email
      savedCoins {
        coinId
        rank
        symbol
        priceUSD
        explorer
        supply
        maxSupply
        marketCapUsd
        volumeUsd24Hr
        priceUsd
        changePercent24Hr
        vwap24HR
        link
      }
    }
  }
`;
