import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;