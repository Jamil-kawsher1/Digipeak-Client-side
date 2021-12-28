import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import './Card.css'
import win10 from '../../img/win10.png'
import { Link } from 'react-router-dom';
const Card = () => {
    const product = [
        {
            productname: 'Windows 10 Pro',
            price: '550',
            img: 'https://www.vhv.rs/dpng/d/411-4112526_esd-win10-pro-windows-10-professional-logo-hd.png',
            validity: 'LifeTime'
        },
        {
            productname: 'Office 365(1yr)',
            price: '500',
            img: 'https://i.imgur.com/a8dSSbN.png',
            validity: '1 year'
        },
        {
            productname: 'Office 365(lifetime)',
            price: '500',
            img: 'https://i.imgur.com/RO896aV.png',
            validity: 'Lifetime'
        },
        {
            productname: 'Windows 11 pro',
            price: '850',
            img: 'https://i.imgur.com/Aq9kKaU.png',
            validity: 'Lifetime'
        },
        {
            productname: 'Office 19 Pro Plus (Online bind)',
            price: '1500',
            img: 'https://i.imgur.com/neIcZR9.png',
            validity: 'Lifetime'
        },
        {
            productname: 'Office 19 Pro Plus (Phone Activation)',
            price: '450',
            img: 'https://i.imgur.com/neIcZR9.png',
            validity: 'Onetime use'
        },
    ]

    const [cproducts, setCproducts] = useState([])

    useEffect(() => {
        fetch('https://digipeak.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCproducts(data));

    }, [cproducts])

    return (
        <div className='container'>
            {cproducts.length < 1 && <div className='d-flex justify-content-center my-5'><Spinner animation="grow" /></div>}

            <Row className=''>


                {
                    cproducts.map(p =>

                        <Col key={p._id} className='my-3 d-flex justify-content-center mx-auto mx-md-0 mx-lg-0 mx-sm-0' xs={12} sm={6} lg={4} >
                            <div className="cardp">

                                <div className="imgBox">
                                    <img src={p.img} alt="mouse corsair" className="mouse" />
                                </div>

                                <div className="contentBox">
                                    <h3>{p.productname}</h3>
                                    <h2 className="price">{p.price} ৳</h2>
                                    <a className="buy"> <Link style={{ textDecoration: 'none' }} to={`/order/${p._id}`}>Buy Now</Link></a>
                                </div>

                            </div>
                        </Col>
                    )
                }

                {/* <div className="cardp">

                        <div className="imgBox">
                            <img src={win10} alt="mouse corsair" className="mouse" />
                        </div>

                        <div className="contentBox">
                            <h3>Mouse Corsair M65</h3>
                            <h2 className="price">61.<small>98</small> €</h2>
                            <a href="#" className="buy">Buy Now</a>
                        </div>

                    </div> */}





                {/* <Col className='mx-lg-5 mx-xs-auto my-5' xs={12} sm={4} lg={3} >

                    <div className="cardp ">

                        <div className="imgBox">
                            <img src="https://www.pngitem.com/pimgs/b/50-503228_happy-girl-png.png" alt="mouse corsair" className="mouse" />
                        </div>

                        <div className="contentBox">
                            <h3>Mouse Corsair M65</h3>
                            <h2 className="price">61.<small>98</small> €</h2>
                            <a href="#" className="buy">Buy Now</a>
                        </div>

                    </div>

                </Col>
                <Col className='mx-lg-5 mx-xs-auto my-5' xs={12} sm={4} lg={3}>

                    <div className="cardp ">

                        <div className="imgBox">
                            <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
                        </div>

                        <div className="contentBox">
                            <h3>Mouse Corsair M65</h3>
                            <h2 className="price">61.<small>98</small> €</h2>
                            <a href="#" className="buy">Buy Now</a>
                        </div>

                    </div>
                </Col>
                <Col className='mx-lg-5 mx-xs-auto my-5' xs={12} sm={4} lg={3} >
                    <div className="cardp ">

                        <div className="imgBox">
                            <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
                        </div>

                        <div className="contentBox">
                            <h3>Mouse Corsair M65</h3>
                            <h2 className="price">61.<small>98</small> €</h2>
                            <a href="#" className="buy">Buy Now</a>
                        </div>

                    </div>
                </Col> */}
            </Row>

        </div>
    );
};

export default Card;