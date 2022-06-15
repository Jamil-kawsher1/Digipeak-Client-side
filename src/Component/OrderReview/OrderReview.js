import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




import './OrderReview.css'
const OrderReview = (props) => {
    const { cart } = props;
    const [placeorderdata, setPlaceorderdata] = useState({});
    const { isLoading, user, error } = useAuth();
    const { id } = useParams();
    const [singleService, setSingleService] = useState([]);
    // const url = `https://digipeak.herokuapp.com/products/${id}`
    // console.log(id);
    console.log(cart)
    // useEffect(() => {

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSingleService(data))
    // }, [])
    // console.log(singleService);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newplaceorderdata = { ...placeorderdata };
        newplaceorderdata[field] = value;
        setPlaceorderdata(newplaceorderdata);

    }


    const handleOrderSubmit = e => {
        // console.log(placeorderdata);
        const userData = {
            name: user.displayName,
            email: user.email,
            orderstatus: "Pending",
            paymentmethod: placeorderdata.paymentoption,
            trasectionid: placeorderdata.transectionId,
            mobile: placeorderdata.mobile,
        };

        let orderedPName = '';
        let orderedQuanitity = '';
        for (let element of cart) {
            // console.log(element.productname + element.quantity);
            orderedPName += element.productname + " " + `(${element.quantity}q),`;

        }
        console.log(orderedPName, orderedQuanitity);
        const productData = {
            OrderedProductName: orderedPName,




        }
        const userOrderData = { ...productData, ...userData };
        console.log(userOrderData);
        if (Object.keys(userData).length < 6) {
            alert("Please Fill up all the field");
        } else if (Object.values(userData).includes('') || Object.values(userData).includes(undefined)) {
            alert("Invalid Input Type please Check");
        } else {
            axios.post('https://digipeak.herokuapp.com/placeorder', userOrderData)
                .then(res => {
                    if (res.data.insertedId) {
                        alert("Order Placed SuccessFully");


                    }
                })
        }

        e.preventDefault();
    }



    return (
        <div id='order' style={{ backgroundColor: '#fff3e0', paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="d-flex flex-column justify-content-center align-items-center" id="order-heading">
                <div className="text-uppercase">
                    <p style={{ fontSize: '24px' }}>Order details</p>
                </div>

            </div>
            <div className="wrapper bg-white">
                <div className="product-data">

                    <div className="prouduct-details">
                        <h6>Prouduct</h6>
                        {cart.map(d => <p key={d._id}>{d.productname}</p>)}
                    </div>

                    <div className="proudct-quantity">
                        <h6>Quantity</h6>
                        {cart.map(d => <p key={d._id} style={{ display: 'flex', justifyContent: 'flex-end' }}>{d.quantity}</p>)}
                    </div>
                </div>




                <div className="pt-2 border-bottom mb-3"></div>
                <label className='from-control' for="floatingInput">Customer Name</label>
                <input disabled value={user.displayName} type="text" className="form-control" id="floatingInput" placeholder="Name" />
                <label className='from-control' for="floatingInput">Email addres</label>
                <input disabled value={user.email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label className='from-control' for="floatingInput">Mobile</label>
                <input onBlur={handleOnBlur} type="text" name='mobile' className="form-control" id="floatingInput" placeholder="Mobile Number" />

                <div className="d-flex justify-content-start align-items-center pl-3 py-3 mb-4 border-bottom">

                </div>
                <div className="row border rounded p-1 my-3">
                    <form onSubmit={handleOrderSubmit}>
                        <div className="col-md-6 py-3">
                            <div className="d-flex flex-column align-items start"> <b>Payment Method</b>
                                <p className="text-justify pt-2">Payment Number: 01778778081 <br />
                                </p>

                                <p className="text-justify ">Use <b>Send Money</b> option </p>





                                <div className="form-check form-check-inline d-flex justify-content-start align-items-center mx-3">

                                    <input onBlur={handleOnBlur} className="form-check-input" type="radio" name="paymentoption" id="inlineRadio1" value="bkash" />
                                    <label className="form-check-label" for="inlineRadio1"></label>

                                    <img style={{ width: '75px' }} src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg" alt="" />

                                    <input onBlur={handleOnBlur} className="form-check-input mx-2" type="radio" name="paymentoption" id="inlineRadio1" value="rocket" />
                                    <label className="form-check-label" for="inlineRadio1"></label>

                                    <img style={{ width: '75px' }} src="https://www.dutchbanglabank.com/img/mlogo.png" alt="" />
                                    <input onBlur={handleOnBlur} className="form-check-input mx-2" type="radio" name="paymentoption" id="inlineRadio1" value="nagad" />
                                    <label className="form-check-label" for="inlineRadio1"></label>

                                    <img style={{ width: '75px' }} src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg" alt="" />
                                </div>
                                <div>

                                    <label className='from-control' for="floatingInput">Transection Id</label>
                                    <input onBlur={handleOnBlur} type="text" name='transectionId' className="form-control" id="floatingInput" placeholder="Transection Id" />
                                    <button type="submit" className="btn btn-success w-50 mt-3">Place order</button>
                                </div>



                                <div className=''>


                                </div>

                            </div>

                        </div>
                        {/* <div className="col-md-6 py-3">
                        <div className="d-flex flex-column align-items start"> <b>Shipping Address</b>
                            <p className="text-justify pt-2">James Thompson, 356 Jonathon Apt.220,</p>
                            <p className="text-justify">New York</p>
                        </div>
                    </div> */}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default OrderReview;