import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Logo from '../logoproject3.png';
import Cart from '../cart.png';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar  className="gradient" bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'><img src={Logo}  width="150" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>        
              
              {/*Constant link for logged in and non logged in users*/}
              <Nav.Link as={Link} to='/'>
                Search For Crypto
              </Nav.Link>
                            
              {/* if user is logged in show saved Cryptos and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Cryptos
                  </Nav.Link>
                                  
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                )}

              {/* Cart link   */}
              <Nav as={Link} to='/Cart'><img src={Cart}  width="100" alt="cart"/>
              </Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* set modal data up (Login and sign Up)*/}
      <Modal className="gradient3" bg='dark' variant='dark' expand='lg' defaultActiveKey='login'
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>

        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login' >
          <Modal.Header className="gradient" bg='dark' variant='dark' expand='lg' closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link  defaultActiveKey='login' eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(true)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
