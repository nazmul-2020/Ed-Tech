import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch('Services.json')
      .then(res => res.json())
      .then(data => SetServices(data))

  }, [])

  return (
    <div className='container mt-5' id='services'>
      <h1 className='text-center'>My Services</h1>
      <div className='row'>
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>


    </div>
  );
};

export default Services;