import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content__about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about__knife' />
      </div>

      <div className='app__aboutus-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
