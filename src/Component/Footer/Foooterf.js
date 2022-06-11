import React from 'react';
import logo from "../../img/digip.png";
import './footerf.css';
const Foooterf = () => {
    return (
        <footer style={{ backgroundColor: "#f6f6f6" }}>




            <div className='foot'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><img src={logo} alt="" />
                    <span style={{ display: 'block' }}>&copy; Jamil Kawsher</span>

                </div>
                <div style={{ display: 'flex', }}>
                    <div className='about-small' style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '30px' }}>


                        <h5>About US</h5>
                        <ul style={{}}>

                            <li>Store Location</li>
                            <li>Contact</li>
                            <li>About Us</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>


                    <div className='important-small' style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '30px' }}>


                        <h5>Important Links</h5>
                        <ul style={{}}>

                            <li>Return</li>
                            <li>Privacy Policy</li>
                            <li>Live Chat</li>
                            <li>FAQ</li>
                        </ul>
                    </div>


                </div>


                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '25px' }}>


                    <h5>Subscribe</h5>
                    <h6>Get E-mail updates about our latest shop and special offers.</h6>
                    <div style={{ width: '90%', }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <input style={{ width: '100%', display: "block", padding: '2px' }} type="text" />



                            <button style={{ padding: "3px", marginTop: '5px', width: '150px', borderRadius: '5px' }}>Subscribe Now</button>
                        </div>





                    </div>
                </div>





            </div>
        </footer>


    );
};

export default Foooterf;