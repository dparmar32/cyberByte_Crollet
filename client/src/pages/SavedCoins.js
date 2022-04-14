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

import Cart from '../cart.png';

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
            <Jumbotron fluid className="gradient text-light">
                <Container>
                    <h1>Viewing {userData.username}'s saved Cryptos!</h1>
                </Container>
            </Jumbotron>
            <Container>
                <h3>
                    {userData.savedCoins?.length
                        ? ` Viewing ${userData.savedCoins.length} saved ${
                            userData.savedCoins.length === 1 ? 'Crypto' : 'Cryptos'
                        }:`
                        : 'You have no saved any Cryptos!'}
                </h3>
                <CardColumns>
                    {userData.savedCoins?.map((coin) => {
                        return (
                            <Card key={coin.coinId} border="dark">
                                {coin.symbol ? (
                                    <Card.Img className= "symbol img"
                                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                    // alt={`The symbol for ${coin.name}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body className="card1">
                                    <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
                                    <p className="small">Rank: # {coin.rank}</p>
                                    <p className="small">Symbol: {coin.symbol}</p>
                                    <p className="small">Price: $ {coin.priceUsd.fixed(2)}</p>
                                    <p className="small">Change Percentage: {coin.changePercent24Hr}</p>
                                    <p className="small button button:hover button:click"><a href={coin.explorer}>Learn More</a></p>
                                    <Card.Text>{coin.description}</Card.Text>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <Button
                                            className="btn btn-danger btn-sm active"
                                            onClick={() => handleDeleteCoin(coin.coinId)}>
                                            Delete this Crypto!
                                        </Button>
                                        <Button
                                            className='btn btn-info btn-sm active'><img src={Cart} width="60" alt="cart"></img>
                                        </Button>
                                    </div>
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
