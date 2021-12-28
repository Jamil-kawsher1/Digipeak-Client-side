import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './LoginSignup.css'
const LoginSingup = () => {

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';
    const { loginUser, user, signInWithGoogle, registerUser } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleloginSubmit = e => {
        console.log(loginData);
        // console.log(loginData.email, loginData.password);
        if (loginData.email == undefined) {
            alert("Please Check Some Info");
        }
        else {
            loginUser(loginData.email, loginData.password);
        }


        e.preventDefault();
    }

    const handleregisterSubmit = e => {
        // if (loginData.password !== loginData.password2) {
        //     alert("Password Did Not Matched Please check!!");
        //     return;
        // }
        registerUser(loginData.email, loginData.password, loginData.name);

        e.preventDefault();
    }

    const notify = () => toast("Wow so easy!");
    if (user.email) {
        history.push(redirect_url);
    }
    return (
        <div>



            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">

                                                {/* {user.email && alert("Login Success") && history.push(redirect_url)} */}


                                                <div className="section text-center">
                                                    <h4 style={{ color: '#c4c3ca' }} className="mb-4 pb-3">Log In</h4>
                                                    <form onSubmit={handleloginSubmit}>



                                                        <input onBlur={handleOnchange} type="email" name='email' className="form-style" placeholder="Your Email" id="logemail" />
                                                        <i className="fa-solid fa-at"></i>


                                                        <input onBlur={handleOnchange} type="password" name='password' className="form-style" placeholder="Your Password" id="logpass" />
                                                        <i className="input-icon uil uil-lock-alt"></i>


                                                        <button className='btn1 mt-4 w-100 mb-2' type="submit">Submit</button>

                                                    </form>

                                                    {/* <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p> */}
                                                </div>

                                                <button onClick={signInWithGoogle} className='mx-auto mt-2 w-100 btn btn-danger' style={{ display: 'block', }}>Google Signin</button>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">



                                                <div className="section text-center">
                                                    <h4 style={{ color: '#c4c3ca' }} className="mb-4 pb-3">Sign Up</h4>
                                                    <form onSubmit={handleregisterSubmit}>


                                                        <div className="form-group">
                                                            <input onBlur={handleOnchange} type="text" name='name' className="form-style" placeholder="Your Full Name" />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input onBlur={handleOnchange} type="email" name='email' className="form-style" placeholder="Your Email" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input onBlur={handleOnchange} type="password" name='password' className="form-style" placeholder="Your Password" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>


                                                        <button className="btn1 mt-4" type="submit">Register</button>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSingup;