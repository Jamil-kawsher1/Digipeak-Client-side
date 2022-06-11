import React from 'react';
import './TestCard.css';
import win10 from '../../img/win10.png'
import { Link } from 'react-router-dom';
const Testcard = (prop) => {
    const { _id, productname, price, img, validity, sale, outstock
    } = prop.data;
    // console.log(prop.data);


    return (
        <div>
            <div className="card">

                <img src={img} alt="" />
                <span style={{ color: "#999999", fontWeight: 'bold', fontSize: '12px', }}>Operating System</span>
                <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>{productname}</h2>
                <span>  <strike  ><span style={{ fontSize: '14px', color: "#666666" }}>৳1500</span></strike> <span style={{ color: '#24c955', fontSize: '18px' }}>  ৳ {price}</span></span>
                {outstock ? <button disabled className='add-cart-btn'>Add to cart</button> : <button className='add-cart-btn'><Link style={{ textDecoration: 'none', color: "#666666" }} to={`/order/${_id}`}>Buy Now</Link></button>}
                {sale && <div className="tag-sale"><h5 style={{ fontSize: "12px", textAlign: 'center', fontWeight: '800' }}>Sale!</h5></div>}
                {outstock && <div className="tag-out-stock"><h5 style={{ fontSize: "12px", textAlign: 'center', fontWeight: '800' }}>Out Of Stock</h5></div>
                }
            </div>


        </div>
    );
};

export default Testcard;