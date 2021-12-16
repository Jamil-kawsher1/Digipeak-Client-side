import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Card.css'
import win10 from '../../img/win10.png'
const Card = () => {
    return (
        <div className='container'>
            <Row className=' '>
                <Col className='mx-lg-5 mx-xs-auto  my-5' xs={12} sm={4} lg={3} >



                    <div className="cardp">

                        <div className="imgBox">
                            <img src={win10} alt="mouse corsair" className="mouse" />
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
                </Col>
            </Row>

        </div>
    );
};

export default Card;