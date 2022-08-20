import React from 'react';
import './NotFound.css'

import notFound from '../../Image/404-not-found.jpg'

const NotFound = () => {
    return (
        <div className="notfound-container">
        <div className='notFound'>
        <h1>Page Not Found 404 !! </h1>
        <img src={notFound} alt="" />
    </div>
    </div>
    );
};

export default NotFound;