import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import digi from "../../img/digip.png";
import logo from "../../img/digipekf.png"
import './navigation.css';
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
                            <NavLink style={{ color: 'black' }} className="nv-link" to="/">Home</NavLink>
                            <NavLink className="nv-link" to='/myorders'>MY Orders</NavLink>
                            <NavLink className="nv-link" to='/manageorders' >Manage orders</NavLink>
                            <NavLink className="nv-link" to='/addproduct' >Add Product</NavLink>













                        </Nav>

                        <Nav>


                            <Dropdown>
                                <Dropdown.Toggle className='' variant="" style={{ backgroundColor: 'white', outline: 'none' }} id="">
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



            </Navbar >



        </>
    );
};

export default Navigation;