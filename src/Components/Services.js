import React from 'react';
import Service from './Service';
import { services } from '../data';
import Title from './Title';

function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}

export default Services;
