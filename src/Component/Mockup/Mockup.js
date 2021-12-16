import React from 'react';
import { Icon } from '@iconify/react';
import { Col, Row } from 'react-bootstrap';
import './Mockup.css'
const Mockup = () => {
    return (
        <div>

            <div className='container '>
                <div>

                    <Row >
                        <Col lg={3} className=''>
                            <div style={{ display: 'flex', fontSize: '28px', alignItems: 'center', margin: '2px 2px' }}>
                                <div > <Icon className='shake' icon="carbon:delivery-add" width="40" /></div>
                                <div className='text-wrap' >
                                    Free Shipping



                                </div>

                            </div>

                        </Col>

                        <Col lg={3}>
                            <div style={{ display: 'flex', fontSize: '28px', alignItems: 'center', margin: '2px 2px' }}>
                                <div className='shake'> <Icon icon="bx:bxs-offer" width="40" /></div>
                                <div className='text-wrap' >
                                    Exclusive Offer



                                </div>

                            </div>

                        </Col>
                        <Col lg={3} >
                            <div style={{ display: 'flex', fontSize: '28px', alignItems: 'center', margin: '2px 2px' }}>
                                <div> <Icon className='shake' icon="emojione-monotone:money-bag" width="40" /></div>
                                <div className='' >
                                    Money Return



                                </div>

                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ display: 'flex', fontSize: '28px', alignItems: 'center', margin: '2px 2px' }}>
                                <div> <Icon className='shake' icon="carbon:two-factor-authentication" width="40" />
                                </div>
                                <div className='text-wrap' >
                                    Authentic Product



                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </div >
    );
};

export default Mockup;