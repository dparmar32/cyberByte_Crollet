// import React from 'react';
// import {
//   Jumbotron,
//   Container,
//   CardColumns,
//   Card,
//   Button,
// } from 'react-bootstrap';
//
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_ME } from '../utils/queries';
// // import { REMOVE_BOOK } from '../utils/mutations';
// // import { removeBookId } from '../utils/localStorage';
//
// import Auth from '../utils/auth';
//
// import Cart from '../cart.png';
//
// const SavedBooks = () => {
//   const { loading, data } = useQuery(QUERY_ME);
//   // const [removeBook, { error }] = useMutation(REMOVE_BOOK);
//
//   const userData = data?.me || {};
//
//   // create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = async (bookId) => {
//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;
//
//     if (!token) {
//       return false;
//     }
//     //
//     // try {
//     //   const { data } = await removeBook({
//     //     variables: { bookId },
//     //   });
//     //
//     //   // upon success, remove book's id from localStorage
//     //   removeBookId(bookId);
//     // } catch (err) {
//     //   console.error(err);
//     // }
//   };
//
//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }
//
//   return (
//     <>
//       <Jumbotron fluid className="gradient text-light">
//         <Container>
//           <h1>Viewing {userData.username}'s saved Cryptos!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h3>
//           {userData.savedBooks?.length
//             ? ` ${userData.savedBooks.length} saved ${
//                 userData.savedBooks.length === 1 ? 'Crypto' : 'Cryptos'
//               }:`
//             : 'You have no saved any Cryptos!'}
//         </h3>
//         <CardColumns>
//           {userData.savedBooks?.map((book) => {
//             return (
//               <Card key={book.bookId} border="dark">
//                 {book.image ? (
//                   <Card.Img
//                     src={book.image}
//                     alt={`The cover for ${book.title}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className="small">Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                  <div class="btn-group" role="group" aria-label="Basic example">
//                   <Button
//                     className="btn btn-danger btn-sm active"
//                     onClick={() => handleDeleteBook(book.bookId)}>
//                     Delete this Crypto!
//                   </Button>
//                   <Button
//                   className='btn btn-info btn-sm active'><img src={Cart} width="60" alt="cart"></img>
//                   </Button>
//                  </div>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };
//
// export default SavedBooks;
