import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import digi from "../../img/digip.png";
import logo from "../../img/digipekf.png"
const Navigation = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container className=''>


                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className='m-auto'>
                            <Nav.Link className='active' href="#features">Home</Nav.Link>
                            <Nav.Link className='active' href="#pricing">About</Nav.Link>
                            <Nav.Link className='active' href="#pricing">My order</Nav.Link>













                        </Nav>

                        <Nav>


                            <Dropdown>
                                <Dropdown.Toggle variant="" style={{ backgroundColor: 'transparent' }} id="dropdown-basic">
                                    <i class="far fa-user"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link id="userpanel" href="#deets"><i class="far fa-user"></i></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>

                            <div>
                                <img src="../../img/logo192.png" alt="" />

                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>



            </Navbar>



        </>
    );
};

export default Navigation;