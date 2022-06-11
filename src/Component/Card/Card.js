import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import './Card.css'
import win10 from '../../img/win10.png'
import { Link } from 'react-router-dom';
import Testcard from '../TestCard/Testcard';
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

    const [cproducts, setCproducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        fetch('https://digipeak.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setCproducts(data);
                setDisplayProduct(data)
            });

    }, [])

    // console.log(displayProduct.filter(pp => pp.productname = 'ttttt'))
    const handleSearch = (event) => {
        const seerchTerm = event.target.value;
        const matchedItem = cproducts.filter(pro => pro.productname.toLowerCase().includes(seerchTerm.toLowerCase()));
        // console.log(matchedItem.productname);
        if (matchedItem.length < 1) {
            displayProduct.flag = -1;
        }
        setDisplayProduct(matchedItem);

        // const matchedProduct=cproducts.filter(product=>product.productname.include)

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column" }}><div style={{ display: 'flex', justifyContent: "flex-end", marginRight: '20%' }}><input className='search-btn fa-solid fa-magnifying-glass' style={{ margin: '10 80px', outlineColor: 'gray', padding: '5px' }} type="text" onChange={handleSearch} placeholder='&#xf002;' /></div>

            <div className='container'>
                {displayProduct.length < 1 && displayProduct.flag !== -1 && <div className='d-flex justify-content-center my-5'><Spinner animation="grow" /></div>}

                {/* <Row className=''>
              
                {
                    displayProduct.map(p =>

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

                
            </Row> */}

                {displayProduct.map(p => <Testcard data={p} key={p._id}></Testcard>)}



            </div>

        </div>

    );
};

export default Card;