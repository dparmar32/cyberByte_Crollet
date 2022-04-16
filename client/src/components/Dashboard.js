import React, {useState, useEffect} from 'react';
import {
    Container,
    Card,
    CardColumns,
} from 'react-bootstrap';
import {saveCoinIds, getSavedCoinIds} from '../utils/localStorage';

const Dashboard = () => {

    const [savedCoinIds, setSavedCoinIds] = useState(getSavedCoinIds());
    const [dashboardCoinState, setDashboardCoinState] = useState(getSavedCoinIds());

    useEffect(() => {
        dashboardResponse();
        return () => saveCoinIds(savedCoinIds);
    }, );

    const dashboardResponse = () => {
        fetch(`https://api.coincap.io/v2/assets?limit=10`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.data)
                setDashboardCoinState(data.data)
            })
    };
    return (
        <Container>
            <h2>
                Here are the top ten cryptocurrencies!
            </h2>
            <p className="dashboard-text">If you are interested in investing in crypto coins, we are inviting you to
                search for more crytos' information.</p>
            <CardColumns>
                {dashboardCoinState.map((coin) => {
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
                                <p className="small button button:hover button:click"><a href={coin.explorer}>Learn
                                    More</a></p>
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