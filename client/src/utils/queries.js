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
        Symbol
        name
        priceUsd
        changePercent24Hr
        explorer
      }
    }
  }
`;
