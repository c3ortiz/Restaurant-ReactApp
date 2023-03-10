import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Opening hours</p>
        <p className='p__opensans'>Mon - Fri: 12:00 am - 11:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 1:00 pm - 1:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
