import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import './Card.css'
import win10 from '../../img/win10.png'
import { Link } from 'react-router-dom';
import Testcard from '../TestCard/Testcard';
const Card = (props) => {
    const { handleAddToCart } = props;
    // console.log(props.handleAddToCart);
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



                {displayProduct.map(p => <Testcard handleAddToCart={handleAddToCart} data={p} key={p._id}></Testcard>)}



            </div>

        </div>

    );
};

export default Card