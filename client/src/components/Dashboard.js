import React, { useState, useEffect } from 'react';
import {
    Jumbotron,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_COIN } from '../utils/mutations';
import { saveCoinIds, getSavedCoinIds } from '../utils/localStorage';
// import { axios } from ‘axios’;
import Auth from '../utils/auth';
import Axios from 'axios'

const Dashboard = () => {
    // create state for holding returned google api data
    const [searchedCoins, setSearchedCoins] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');
    // create state to hold saved coinId values
    const [savedCoinIds, setSavedCoinIds] = useState(getSavedCoinIds());
    const [topFiveCoinState, setTopFiveCoinState] = useState(getSavedCoinIds());
    const [saveCoin, {error}] = useMutation(SAVE_COIN);
    
    
    const response = () => {
            fetch(`https://api.coincap.io/v2/assets?limit=10`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
       console.log(data.data)
       setTopFiveCoinState(data.data)
    })
    };

    useEffect(() => {
        response();
        return () => saveCoinIds(savedCoinIds);
    }, []);
const topFiveCoins = async () => {
    try {
        const response = await fetch(
        `https://api.coincap.io/v2/assets?limit=10`
        );
        if (!response.ok) {
            throw new Error('something went wrong!');
        }
        const { data } = await response.json();
        const topFiveCoinData = data.map((coin) => ({
            coinId: coin.id,
            rank: coin.rank || ['No rank to display'],
            symbol: coin.symbol,
            name: coin.name,
            priceUsd: coin.priceUsd,
            changePercent24Hr : coin.changePercent24Hr,
            explorer: coin.explorer,
        }))
        const topFiveCoinDataFilter = topFiveCoinData.filter((top) => {
           return top.rank >= 5;
        })
        setTopFiveCoinState(topFiveCoinDataFilter);
} catch (err){
    console.error(err);
}
};
return (

  <Container>
    <h2>
      Here are the top ten cryptocurrencies!
    </h2>
    <p>If you are interted in investing in crypto coins, we are inviting you to search for more crytos' information.</p>
                <CardColumns>
                    {topFiveCoinState.map((coin) => {
                        return (
                            <Card key={coin.coinId} border="dark">
                                {coin.symbol ? (
                                    <Card.Img className="small"
                                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                        alt={`The symbol for ${coin.name}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body className="card1">
                                    <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
                                    <p className="small">Rank: # {coin.rank}</p>
                                    <p className="small">Symbol: {coin.symbol}</p>
                                    <p className="small">Price: $ {coin.priceUsd}</p>
                                    <p className="small">Change Percentage: {coin.changePercent24Hr}</p>
                                    <p className="small button button:hover button:click"><a href={coin.explorer}>Learn More</a></p>
                                    <Card.Text>{coin.description}</Card.Text>
                                   
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>

)


};


export default Dashboard;