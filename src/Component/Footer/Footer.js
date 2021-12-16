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
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <img src={digi} alt="" />
                                <span className='mr-auto ml-0' style={{ display: "block" }}>&copy; Jamil Kawsher</span>
                            </div>


                        </Col>
                        <Col lg={2} sm={12} xs={12}>
                            <div><h3>About Us</h3></div>
                            <div>
                                <li className='text-start'>
                                    <ul>About US</ul>
                                    <ul>Store Location</ul>
                                    <ul>Contact</ul>
                                    <ul>Order Tracking</ul>
                                </li>
                            </div>

                        </Col>
                        <Col lg={2} sm={12} xs={12}>sm=8</Col>
                        <Col lg={2} sm={12} xs={12}>sm=8</Col>
                        <Col lg={4} sm={12} xs={12}>sm=8</Col>

                    </Row>


                </Container>

            </footer>
        </>
    );
};

export default Footer;