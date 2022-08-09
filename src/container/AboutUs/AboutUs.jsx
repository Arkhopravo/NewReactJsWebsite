import React from 'react';
import {images}  from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='P__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim reiciendis illum magnam fuga impedit autem a quia, sed beatae quidem, eum doloremque ullam facilis ab doloribus nihil maiores voluptatum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum expedita quibusdam asperiores eligendi maiores maxime totam, eum beatae cum ut cupiditate temporibus, deserunt, tenetur aspernatur nam nulla omnis iure accusantium.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex-center">
        <img src={images.knife} alt="about_knife" />
      </div>
      
        <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='P__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis laboriosam aut quae laborum labore vel, sint ducimus. Veniam excepturi dolorem, reiciendis quisquam velit ad accusamus non eos nulla molestias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum expedita quibusdam asperiores eligendi maiores maxime totam, eum beatae cum ut cupiditate temporibus, deserunt, tenetur aspernatur nam nulla omnis iure accusantium.</p>
        <button type="button" className='custom__button'>Know More</button>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
