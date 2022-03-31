import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_COIN = gql`
  mutation saveCoin($coinData: CoinInput!) {
    saveCoin(coinData: $coinData) {
      _id
      coinName
      price
      savedBooks {
        coinId
        coinName
        symbol
        price
        priceChange
        rank
      }
    }
  }
`;

export const REMOVE_COIN = gql`
  mutation removeBook($coinId: ID!) {
    removeBook(coinId: $coinId) {
      _id
      username
      email
      savedBooks {
        coinId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
