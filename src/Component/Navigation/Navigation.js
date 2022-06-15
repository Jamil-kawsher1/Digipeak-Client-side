import React from 'react';
import { useContext } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { CartDContext } from '../../Context/CartProvider/CartProvider';
import useAuth from '../../Hooks/useAuth';
import digi from "../../img/digip.png";
import logo from "../../img/digipekf.png"
// import { cartContext } from '../Card/Card';
import './navigation.css';
const Navigation = (props) => {
    const { cart } = props;
    console.log(cart);

    const { user, logOut } = useAuth({});
    // const cart = useContext(cartContext);
    // console.log(cart)
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        totalQuantity = totalQuantity + product.quantity;
    }
    // console.log(totalQuantity);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container className=''>


                    <Navbar.Brand ><Link to="/"> <img src={logo} alt="" /></Link></Navbar.Brand>


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
                    <Nav>
                        {(cart.length) ? <Link className='product-cart' to='order'> <i class="fa-solid fa-cart-shopping"></i>{totalQuantity === 0 ? "" : " " + totalQuantity}</Link> : <Link className='product-cart' to='#'> <i class="fa-solid fa-cart-shopping"></i></Link>}
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Container>



            </Navbar >



        </>
    );
};

export default Navigation;