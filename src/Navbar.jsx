import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const NavbarSection = () => {
  const isDesktopView = window.innerWidth >= 992; 

  return (
    <>
      <Navbar className="bg-light navbar-size" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Brand className="Logo" href="#home">
            <img
              src="images/company.jpg"
              height="25"
              width="25"
              className="d-inline-block align-top company"
              alt="Logo"
            />
            <span className="logo-text">LOGO</span>
          </Navbar.Brand>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0 index">
              <Nav.Link className="me-lg-5" href="#shop">
                SHOP
              </Nav.Link>
              <Nav.Link className="me-lg-5" href="#skills">
                SKILLS
              </Nav.Link>
              <Nav.Link className="me-lg-5" href="#stories">
                STORIES
              </Nav.Link>
              <Nav.Link className="me-lg-5" href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="me-lg-5" href="#contactus">
                CONTACT US
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {isDesktopView ? (
                <div className="icons"> 
                  <Nav.Link href="#search">
                    <i className="fas fa-search fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#fav">
                    <i className="fas fa-heart fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#cart">
                    <i className="fas fa-shopping-cart fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#profile">
                    <i className="fas fa-user fa-lg" />
                  </Nav.Link>
                </div>
              ) : null}

              <NavDropdown
                title="ENG"
                id="language-dropdown"
                className="Languages"
              >
                <NavDropdown.Item href="#en">English</NavDropdown.Item>
                <NavDropdown.Item href="#fr">French</NavDropdown.Item>
                <NavDropdown.Item href="#de">German</NavDropdown.Item>
              </NavDropdown>

              {!isDesktopView ? (
                <div className="icons"> 
                  <Nav.Link href="#search">
                    <i className="fas fa-search fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#fav">
                    <i className="fas fa-heart fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#cart">
                    <i className="fas fa-shopping-cart fa-lg" />
                  </Nav.Link>
                  <Nav.Link href="#profile">
                    <i className="fas fa-user fa-lg" />
                  </Nav.Link>
                </div>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSection;
