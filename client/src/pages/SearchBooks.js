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
// import { SAVE_BOOK } from '../utils/mutations';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
// import { axios } from 'axios';

import Auth from '../utils/auth';
import Axios from 'axios'

const SearchBooks = () => {
  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());


  
  async function pullfromApi(event){
    event.preventDefault();
    let api = `https://api.coincap.io/v2/assets`
    try {
      const response = await fetch(api);
      console.log("hello");
    //   const request = await axios.get(api);
    const {data} = await response.json()
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  //const myArr = JSON.parse(api);

  //console.log(api);
  // make a fetch request to get data store it in state react
  
  // const [saveBook, { error }] = useMutation(SAVE_BOOK);
// useEffect(()=>{
  // cryptoSearchApi();

// })

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
    // return () => saveBookIds(savedBookIds);
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
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets``
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    // try {
    //   const { data } = await saveBook({
    //     variables: { bookData: { ...bookToSave } },
    //   });
    //   console.log(savedBookIds);
    //   setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <>
      <Jumbotron fluid className="gradient text-light">
        <Container>
          {/* <h1>Search for Crypto!</h1> */}
          <Form onSubmit={pullfromApi}>
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
          {searchedBooks.length
            ? `${searchedBooks.length} results:`
            : 'Welcome to CyberByte Crollet! Search for Crypto to begin'}
        </h2>
        <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {/*{Auth.loggedIn() && (*/}
                  {/*  <Button*/}
                  {/*    disabled={savedBookIds?.some(*/}
                  {/*      (savedId) => savedId === book.bookId*/}
                  {/*    )}*/}
                  {/*    className="btn-block btn-info"*/}
                  {/*    onClick={() => handleSaveBook(book.bookId)}*/}
                  {/*  >*/}
                  {/*    {savedBookIds?.some((savedId) => savedId === book.bookId)*/}
                  {/*      ? 'Coi Already Saved!'*/}
                  {/*      : 'Save This Coin!'}*/}
                  {/*  </Button>*/}
                  {/*)}*/}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBooks;

// This needs to be changed to be exported default SearchCrypto 
// Also, we need to change the parameters to match the parameters of the Crypto API
