import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white mt-1 bg-'>
            <p className='m-0'><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;