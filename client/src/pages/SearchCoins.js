import React, { useState, useEffect } from 'react';
import {
    Jumbotron,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
    CardGroup,
    CardDeck,
    CardRow,
} from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_COIN } from '../utils/mutations';
import { saveCoinIds, getSavedCoinIds } from '../utils/localStorage';


import Auth from '../utils/auth';
// import Axios from 'axios'

const SearchCoins = () => {
    // create state for holding returned Cryto api data
    const [searchedCoins, setSearchedCoins] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved coinId values
    const [savedCoinIds, setSavedCoinIds] = useState(getSavedCoinIds());

    const [saveCoin, {error}] = useMutation(SAVE_COIN);




    // async function pullfromApi(event){
    //     event.preventDefault();
    //     let api = `https://api.coincap.io/v2/assets/`
    //     try {
    //         const response = await fetch(api);
    //         console.log("hello");
    //         //   const request = await axios.get(api);
    //         const {data} = await response.json()
    //         console.log(data);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    // const myArr = JSON.parse(api);

    //console.log(api);
    // make a fetch request to get data store it in state react

    // const [saveCoin, { error }] = useMutation(SAVE_BOOK);
// useEffect(()=>{
    // cryptoSearchApi();

// })

    // set up useEffect hook to save `savedCoinIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // useEffect(() => {
    // return () => saveCoinIds(savedCoinIds);
    // return cryptoSearchApi();
    // });

    // const cryptoSearchApi = async () => {
    //   await setSearchInput('bitcoin');

    //   fetch(api)
    //   .then((res) => {
    //     res.json
    //   })
    //   .then((data) => {
    //     console.log(data.data)
    //   })
    // }

    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveCoinIds(savedCoinIds);
    });
    // create method to search for coins and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await fetch(
                // `https://www.googleapis.com/coins/v1/volumes?q=${searchInput}`
                // `api.coincap.io/v2/assets/?q=${{id}}`
                `https://api.coincap.io/v2/assets?search=${searchInput}`
            );

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { data } = await response.json();

            const coinData = data.map((coin) => ({
                // coinId: coin.id,
                // rank: coin.rank,
                // symbol: coin.symbol,
                // name: coin.name,
                // priceUsd: coin.priceUsd

                coinId: coin.id,
                rank: coin.rank || ['No rank to display'],
                symbol: coin.symbol,
                name: coin.name,
                priceUsd: coin.priceUsd,
                changePercent24Hr : coin.changePercent24Hr,
                explorer: coin.explorer,

                // priceUsd: coin.volumeInfo.priceUsd.thumbnail || '',
            }));

            setSearchedCoins(coinData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving a coin to our database
    const handleSaveCoin = async (coinId) => {
        // find the coin in `searchedCoins` state by the matching id
        const coinToSave = searchedCoins.find((coin) => coin.coinId === coinId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
          const { data } = await saveCoin({
            variables: { coinData: { ...coinToSave } },
          });
          console.log(savedCoinIds);
          setSavedCoinIds([...savedCoinIds, coinToSave.coinId]);
        } catch (err) {
          console.error(err);
        }
    };
    return (
        <>
            <Jumbotron fluid className="gradient text-light">
                <Container>
                    {/* <h1>Search for Crypto!</h1> */}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name="searchInput"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type="text"
                                    size="lg"
                                    placeholder="Search for Crypto"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type="submit" variant="success" size="lg">
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                <h2>
                    {searchedCoins.length
                        ? `${searchedCoins.length} results:`
                        : 'Welcome to CyberByte Crollet! Search for Crypto to begin'}
                </h2>
                <CardColumns>
                    {searchedCoins.map((coin) => {
                        return (
                            <Card key={coin.coinId} border="dark">
                                {coin.symbol ? (
                                    <Card.Img className="symbol"
                                        src={coin.symbol}
                                        alt={`The symbol for ${coin.name}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body className="card1">
                                    <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
                                    <p className="small">Rank: #{coin.rank}</p>
                                    <p className="small">Symbol: {coin.symbol}</p>
                                    <p className="small">Price: ${coin.priceUsd}</p>
                                    <p className="small">Change Percentage: {coin.changePercent24Hr}</p>
                                    <p className="small"><a href={coin.explorer}>Learn More</a></p>
                                    <Card.Text>{coin.description}</Card.Text>
                                    {Auth.loggedIn() && (
                                      <Button
                                        disabled={savedCoinIds?.some(
                                          (savedId) => savedId === coin.coinId
                                        )}
                                        className="btn-block btn-info"
                                        onClick={() => handleSaveCoin(coin.coinId)}
                                      >
                                        {savedCoinIds?.some((savedId) => savedId === coin.coinId)
                                          ? 'Coin Already Saved!'
                                          : 'Save This Coin!'}
                                      </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
};

export default SearchCoins;
