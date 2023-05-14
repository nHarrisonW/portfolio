import React, { useState } from 'react';
import './AboutMe.css';

import heroImg from '../Assets/Headshot-removebg-preview.png';
import bigHeadImg from '../Assets/big-head2-removebg-preview.png';

function AboutMe() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='about-parent'>
      <div className='about-text'>
        <h2>i'm <span> harrison wilkins</span>, an aspiring junior developer from Tracy, California.</h2>
        <h3>this is my first year in software development, and i'm eager to switch careers!</h3>
        <h3>growing up, i was surrounded by the military as both my parents proudly served our country. their dedication and discipline inspired me to pursue a similar path, albeit in a different domain. i am passionate about software engineering and hope to honor my parents' legacy by leveraging technology to make a meaningful impact.</h3>
        <h3>join me on this exciting journey as i explore the endless possibilities of software development.</h3>
        <h1>thanks for reading!</h1>
      </div>
      <div className='about-img'>
        <img src={isClicked ? bigHeadImg : heroImg} alt="" onClick={handleClick} />
      </div>
    </div>
  );
}

export default AboutMe;
