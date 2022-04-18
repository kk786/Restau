import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.R} alt="R" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoo__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, soluta corrupti maiores eaque quos excepturi aliquam tempore? Quis, amet sit.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoo__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, soluta corrupti maiores eaque quos excepturi aliquam tempore? Quis, amet sit.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
