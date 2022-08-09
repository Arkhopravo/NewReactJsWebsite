import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="chef" />
    </div>
    
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia porro voluptatem tempora ullam accusantium totam possimus asperiores maxime officia eos corporis magnam iste cum a vel similique, vero reprehenderit.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga pariatur nostrum et nemo repellat sit aspernatur, eos inventore quidem?</p>

      </div>

          <div className="app__chef-sign">
              <p className=''>Kevin Luo</p>
              <p className='p__opensans'>Chef & Founder</p>
              <img src={images.sign} alt="sign" />
          </div>
    </div>
  </div>
);

export default Chef;
