import React from 'react';
import {
    Jumbotron,
    Container,
    CardColumns,
    Card,
    Button,
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_ME2 } from '../utils/queries';
import { REMOVE_COIN } from '../utils/mutations';
import { removeCoinId } from '../utils/localStorage';

import Auth from '../utils/auth';

import Cart from '../cart.png';

import Basket from '../components/Basket'
import { useState } from 'react';
import { CART_COIN } from '../utils/mutations';


// const cartCoins = () => {
//     const [cartItems, setCartItems] = useMutation(CART_COIN);
// }


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
                    <h1>Viewing {userData.name}'s saved Cryptos!</h1>
                </Container>
            </Jumbotron>
    {/* Cart Items */}
            <aside className="block2 col-3">
            <h3>Cart Items</h3>
            <h5>
                    {userData.cartCoins?.length
                        ? ` Viewing ${userData.cartCoins.length} saved ${
                            userData.cartCoins.length === 1 ? 'Crypto' : 'Cryptos'
                        }:`
                        : 'Cart is Empty!'}
            </h5>
            {/* <div>
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                    {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                      <div className="col-2">
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>{' '}
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                      </div>

                        <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                    ))}
                </div> */}
            </aside>


    {/* Save Crypto container */}
            <Container className="block col-13">
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
<<<<<<< HEAD
                                    <Card.Img className= "symbol img"
=======
                                    <Card.Img className="small"
>>>>>>> 52762b7abc936d301ad54990bc8e3e113cfce36d
                                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                    alt={`The symbol for ${coin.name}`}
                                        variant="top"
                                    />
                                ) : null}
<<<<<<< HEAD
                                <Card.Body className="card1 justify-content-center">
                                    <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
=======
                                <Card.Body className="card1">
                                <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
>>>>>>> 52762b7abc936d301ad54990bc8e3e113cfce36d
                                    <p className="small">Rank: # {coin.rank}</p>
                                    <p className="small">Symbol: {coin.symbol}</p>
                                    <p className="small">Price: $ {coin.priceUsd}</p>
                                    <p className="small">Change Percentage: {coin.changePercent24Hr}</p>
                                    <p className="small button button:hover button:click"><a href={coin.explorer}>Learn More</a></p>
                                    <Card.Text>{coin.description}</Card.Text>
                                    <div class="btn-group btn-size" role="group" aria-label="Basic example">
                                        <Button
                                            className="btn btn-danger btn-sm active left align"
                                            onClick={() => handleDeleteCoin(coin.coinId)}>
                                            Delete this Crypto!
                                        </Button>
                                        <Button
                                            className='btn btn-info btn-sm active right align'><img src={Cart} width="60" alt="cart"></img>
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
