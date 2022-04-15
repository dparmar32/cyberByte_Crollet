// import React, { useState, useEffect  } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Modal, Tab, NavbarBrand, Card,  CardColumns} from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import SearchCoins from '../pages/SearchCoins';

// import Logo from '../logoproject3.png';
// import Cart from '../cart.png';

// import Auth from '../utils/auth';





// const topTenCoins = () => {
//     const [stateVariable, setStateVariable] = useState([]);

//     useEffect(() => {
//         return () => stateVariable(stateVariable);
//     });

// const TopTen = async () => {


//         // try {
//             const response = await fetch(
//                 `https://api.coincap.io/v2/assets?limit=10`) ;
                
//                 if (!response.ok) {
//                     throw new Error('something went wrong!');
//                 }

//                 const { data } = await response.json();

//                 const coinData = data.map((coin) => ({
//                     coinId: coin.id,
//                     rank: coin.rank || ['No rank to display'],
//                     symbol: coin.symbol,
//                     name: coin.name,
//                     priceUsd: coin.priceUsd,
//                     changePercent24Hr : coin.changePercent24Hr,
//                     explorer: coin.explorer,

//                         // priceUsd: coin.volumeInfo.priceUsd.thumbnail || '',
//                 }));

//                     // setTopTenCoins(coinData)
//             //     } catch (err) {
//             //         console.error(err);
//             // }
//     // }

//     return (
//         <>
//         <Container>
//                 <h2>
//                     {TopTen.length
//                         ? `${TopTen.length} results:`
//                         : 'Please wait! We are still looking.'}
//                 </h2> 
//                 <CardColumns>
//                     {TopTen.map((coin) => {
//                         return (
//                             <Card key={coin.coinId} border="dark">
//                                 {coin.symbol ? (
//                                     <Card.Img className="symbol"
//                                         src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
//                                         alt={`The symbol for ${coin.name}`}
//                                         variant="top"
//                                     />
//                                 ) : null}
//                                 <Card.Body className="card1">
//                                     <Card.Title><h3><strong>{coin.name}</strong></h3></Card.Title>
//                                     <p className="small">Rank: # {coin.rank}</p>
//                                     <p className="small">Symbol: {coin.symbol}</p>
//                                     <p className="small">Price: $ {coin.priceUsd}</p>
//                                     <p className="small">Change Percentage: {coin.changePercent24Hr}</p>
//                                     <p className="small"><a href={coin.explorer}>Learn More</a></p>
//                                     <Card.Text>{coin.description}</Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         );
//                     })}
//                 </CardColumns>
//             </Container>

//         </>
//     );
// };

// export default TopTen;