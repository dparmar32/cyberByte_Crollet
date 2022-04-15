import {gql} from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
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

