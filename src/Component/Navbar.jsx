import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container className='container m-0'>
        {/* Logo */}
        <Navbar.Brand>
          <img className='sole' src="/sole.png" alt="img" />
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* Home */}
            <Nav.Link className='fs-5 me-3 fw-bold text-primary'>Home</Nav.Link>

            {/* Other Links */}
            <Nav.Link className='fs-5 me-2 text-primary'>Previsioni</Nav.Link>
            <Nav.Link className='fs-5 me-2 text-primary'>Maree</Nav.Link>
            <Nav.Link className='fs-5 text-primary'>Contatti</Nav.Link>
          </Nav>

          {/* Account Section with Dropdown */}
          <Nav className="account ml-auto">
            <img className='sole2' src="/sole.png" alt="sole" />
            <NavDropdown title="Account" id="basic-nav-dropdown" className="text-light">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className='ps-1'>Email</Form.Label>
                  <FormControl type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className='ps-1 pt-2'>Password</Form.Label>
                  <FormControl type="password" placeholder="Password" />
                </Form.Group>

                <Button className='ms-5 mt-2' variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
