import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import digi from "../../img/digip.png";
import logo from "../../img/digipekf.png"
const Navigation = () => {

    const { user, logOut } = useAuth({});
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container className=''>


                    <Navbar.Brand ><Link to="/"> <img src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className='m-auto'>
                            <Nav.Link className='active' ><Link style={{ color: 'black', textDecoration: 'none' }} to='/'>Home</Link></Nav.Link>
                            <Nav.Link className='active' ><Link style={{ color: 'black', textDecoration: 'none' }} to='/myorders'>My orders</Link></Nav.Link>
                            <Nav.Link className='active' ><Link style={{ color: 'black', textDecoration: 'none' }} to='/manageorders'>Manage Orders</Link></Nav.Link>













                        </Nav>

                        <Nav>


                            <Dropdown>
                                <Dropdown.Toggle className='' variant="" style={{ backgroundColor: 'transparent' }} id="">
                                    <i className=" far fa-user"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {user.email ? <Dropdown.Item onClick={logOut} href="#/">Logout</Dropdown.Item> : <Dropdown.Item onClick={logOut} href="#/">

                                        <Link style={{ textDecoration: 'none', color: '#000' }} to='/login'>Login</Link>
                                    </Dropdown.Item>}

                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Link eventKey={2} >
                                {user.displayName || user.email}
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