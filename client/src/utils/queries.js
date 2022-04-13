import {gql} from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
<<<<<<< HEAD
=======
      savedCoins {
        coinId
        rank
        symbol
        name
        priceUsd
        changePercent24Hr
        explorer
      }
>>>>>>> 4dfeabc668375197b80873d4349640ac081da2a6
    }
  }
`;
