import React from 'react';
// import about from '../../../Image/'
import abouts from '../../Image/abouts.jpg'


const AboutUs = () => {
    return (
        <div>
            <h1 className='text-center'>About Us</h1>
            <div className='container'>
            <div className='row '>
                <div className='g-4 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center '>
                    <p className=''>Creative IT Institute is a trusted organization dedicated to creating breakthroughs in IT. Since its inception, Creative IT has achieved multifaceted success in the long 13 years. Contributing to the construction of digital Bangladesh. One of the leading IT companies in Bangladesh has been playing an important role in eliminating the unemployment problem since 2008.</p>
                </div>
                <div className='g-4 col-sm-12 col-md-6 col-lg-6'>
                    <img className='h-100 w-100 ' src={abouts} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;