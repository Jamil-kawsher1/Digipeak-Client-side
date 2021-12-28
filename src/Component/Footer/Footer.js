import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import digi from "../../img/digip.png";
import flogo from '../../img/digipekf.png';
import './Fotter.css';
const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: "#f6f6f6" }}>
                <Container style={{ padding: '120px' }}>
                    <Row>
                        <Col lg={2} sm={12} xs={12}>
                            <div className='' style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                                <img src={digi} alt="" />
                                <span className='text-start' style={{ display: "inline-block", marginLeft: '10px' }}>&copy; Jamil Kawsher</span>
                            </div>


                        </Col>
                        <Col lg={2} sm={12} xs={12}>
                            <div style={{ display: 'grid', placeContent: 'center' }}>



                                <div className='mx-auto'><h5>About Us</h5></div>
                                <div>
                                    <li className='text-start'>
                                        <ul>About US</ul>
                                        <ul>Store Location</ul>
                                        <ul>Contact</ul>
                                        <ul>Order Tracking</ul>
                                    </li>
                                </div>
                            </div>


                        </Col>
                        <Col lg={2} sm={12} xs={12}>

                            <div style={{ display: 'grid', placeContent: 'center' }}>



                                <div className='mx-auto'><h5>Important Links</h5></div>
                                <div>
                                    <li className='text-start'>
                                        <ul>Returns</ul>
                                        <ul>Support Policy</ul>
                                        <ul>Contact</ul>
                                        <ul>FAQ</ul>
                                    </li>
                                </div>
                            </div>


                        </Col>
                        <Col lg={2} sm={12} xs={12}>
                            <div style={{ display: 'grid', placeContent: 'center' }}>



                                <div className='mx-auto'><h5>Follow Us</h5></div>
                                <div>
                                    <li className='text-start'>
                                        <ul>Facebook</ul>
                                        <ul>Twitter</ul>
                                        <ul>Instagram</ul>
                                        <ul>Youtube</ul>
                                    </li>
                                </div>
                            </div>



                        </Col>
                        <Col lg={4} sm={12} xs={12}>

                            <div style={{ display: 'grid', placeContent: 'center' }}>



                                <h5>Subscribe</h5>

                                <h6>Get E-mail updates about our latest shop and special offers.</h6>
                                <input type="text" />
                                <button className='mx-auto mt-2 rounded-3 w-50 w-md-25 w-lg-25 w-sm-25 w-xl-25  ' type="submit">Subscribe Now</button>

                            </div>
                        </Col>

                    </Row>


                </Container>

            </footer>
        </>
    );
};

export default Footer;