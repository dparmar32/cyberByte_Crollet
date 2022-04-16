import {gql} from '@apollo/client';

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

export const SAVE_COIN = gql`
  mutation saveCoin($coinData: coinInput!) {
    saveCoin(coinData: $coinData) {
      _id
      name
      email
      savedCoins {
        coinId
        rank
        symbol
        name
        priceUsd
        changePercent24Hr
        explorer
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
        name
        priceUsd
        changePercent24Hr
        explorer
      }
    }
  }
`;

