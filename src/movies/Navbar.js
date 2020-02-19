import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import styled from "styled-components";
class Navbars extends React.Component {
  render() {
    return (
      <NavWrapper>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`
  background-color: #4b2cc6;
  .navbar {
    a {
      color: #fff !important;
    }
  }
`;

export default Navbars;
