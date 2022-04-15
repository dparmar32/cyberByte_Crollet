import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import SearchCoins from './pages/SearchCoins';
import SavedCoins from './pages/SavedCoins';
// import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import TopTen from './components/TopTen';
import Footer from './components/Footer';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
<<<<<<< HEAD
            {/* <Route exact ="/" component={TopTen} /> */}
            {/*<Route exact path="/" component={SearchBooks} />*/}
            <Route exact path="/" component={SearchCoins} />
            <Route exact path="/" component={TopTen} />
=======
            
            {/*<Route exact path="/" component={SearchBooks} />*/}
            <Route exact path="/search" component={SearchCoins} />
>>>>>>> 036614ac198fc25bf9591c4e350c6942f42d9ab5
            {/* <Route exact path="/saved" component={SavedBooks} /> */}
            <Route exact path="/saved" component={SavedCoins} />
            {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
          </Switch>
            <Route exact path="/" component={Dashboard} />
          <Footer />
        </>
      </Router>
           
    </ApolloProvider>
     
  );
}

export default App;
