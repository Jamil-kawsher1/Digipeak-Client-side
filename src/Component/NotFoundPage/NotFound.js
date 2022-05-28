import React from 'react';
import notfound from '../../img/notfoundf.jpg';
import './notFound.css';
const NotFound = () => {
    return (
        <div className='notf'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;