// NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// import CryptoList from './CryptoList'; // Assurez-vous que le chemin du composant est correct

const NavigationBar = () => {
  return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Cryptomonnaies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#cryptocurrencies">Cryptomonnaies</Nav.Link>
                <Nav.Link href="#exchanges">Échanges</Nav.Link>
                <Nav.Link href="#news">Actualités</Nav.Link>
                <Nav.Link href="#portfolio">Portefeuille</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#signin">Se connecter</Nav.Link>
                <Nav.Link href="#signup">S'inscrire</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <CryptoList /> */}
      </div>
  );
};

export default NavigationBar;
