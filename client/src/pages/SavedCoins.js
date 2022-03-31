import React from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_COIN } from '../utils/mutations';
import { removeCoinId } from '../utils/localStorage';

import Auth from '../utils/auth';

const SavedCoins = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeCoin, { error }] = useMutation(REMOVE_COIN);

  const userData = data?.me || {};

  // create function that accepts the coin's mongo _id value as param and deletes the coin from the database
  const handleDeleteCoin = async (coinId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeCoin({
        variables: { coinId },
      });

      // upon success, remove coin's id from localStorage
      removeCoinId(coinId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing {userData.username}'s coins!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedCoins?.length
            ? `Viewing ${userData.savedCoins.length} saved ${
                userData.savedCoins.length === 1 ? 'coin' : 'coins'
              }:`
            : 'You have no saved coins!'}
        </h2>
        <CardColumns>
          {userData.savedCoins?.map((coin) => {
            return (
              <Card key={coin.coinId} border="dark">
                {coin.image ? (
                  <Card.Img
                    src={coin.image}
                    alt={`The cover for ${coin.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{coin.title}</Card.Title>
                  <p className="small">Authors: {coin.authors}</p>
                  <Card.Text>{coin.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteCoin(coin.coinId)}
                  >
                    Delete this Coin!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedCoins;
