import React from 'react';
import { Swiper, SwiperSlide, navigation } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Topbanner.css'
import win10 from '../../img/win10.png'
// swiper core styles
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';


const TopBanner = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);

    return (
        < >
            <Swiper style={{ marginTop: 10 }} spaceBetween={10} centeredSlides={true} autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide style={{ backgroundColor: '#f0e0ff' }}>



                    <Container className='my-3'>

                        <Row >
                            <Col xs={12} lg={6} className='my-auto'>
                                <h4 className=''>Hot Product</h4>

                                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '60px' }}>Year end offer</h3>
                                <h3>2021 Collection</h3>

                                {/* <Button>Shop Now</Button> */}
                                <button className="btn btn-background-slide mb-3 mb-md-0 mb-lg-0 mb-sm-0">Shop Now</button>
                            </Col>

                            <Col xs={12} lg={6}>
                                <img className='img-fluid' style={{ maxHeight: '350px' }} src='https://i.imgur.com/iJ610ZD.png' alt="" />
                            </Col>
                        </Row>
                    </Container>




                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: '#f0e0ff' }}>



                    <Container className='my-3'>

                        <Row >
                            <Col xs={12} lg={6} className='my-auto'>
                                <h4 className=''>Hot Product</h4>

                                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '60px' }}>Year end offer</h3>
                                <h3>2021 Collection</h3>

                                {/* <Button>Shop Now</Button> */}
                                <button className="btn btn-background-slide mb-3 mb-md-0 mb-lg-0 mb-sm-0">Shop Now</button>
                            </Col>

                            <Col xs={12} lg={6}>
                                <img className='img-fluid' style={{ maxHeight: '350px' }} src='https://i.imgur.com/Bzt1SDO.png' alt="" />
                            </Col>
                        </Row>
                    </Container>




                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: '#f0e0ff' }}>



                    <Container className='my-3'>

                        <Row >
                            <Col xs={12} lg={6} className='my-auto'>
                                <h4 className=''>Hot Product</h4>

                                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '60px' }}>Year end offer</h3>
                                <h3>2021 Collection</h3>

                                {/* <Button>Shop Now</Button> */}
                                <button className="btn btn-background-slide mb-3 mb-md-0 mb-lg-0 mb-sm-0">Shop Now</button>
                            </Col>

                            <Col xs={12} lg={6}>
                                <img className='img-fluid' style={{ maxHeight: '350px' }} src='https://i.imgur.com/hub4XNb.png' alt="" />
                            </Col>
                        </Row>
                    </Container>




                </SwiperSlide>

                {/* <SwiperSlide><img src="https://i.ibb.co/bNn4TTM/b1.png" style={{ width: '100%' }} /></SwiperSlide> */}
                {/* <SwiperSlide><img src="https://i.ibb.co/DgRg3cT/b2.png" style={{ width: '100%' }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/BVCLzK1/b3.png" style={{ width: '100%' }} /></SwiperSlide> */}


            </Swiper>
        </>
    );
};

export default TopBanner;