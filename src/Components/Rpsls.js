import React from 'react'
import './Rpsls.css';

import RpslsSS from '../Assets/rpslsInactive2.png';
import RpslsActive from '../Assets/rpslsActive.png';
import RpslsYouWin from '../Assets/rpslsYouWin.png'
import { Carousel } from 'react-bootstrap';

export default function Rpsls() {
  return (
    <div className='Game'>
      <div>
        <a href="https://rpslsbyharrison.azurewebsites.net/">
          <h1>rock vs paper vs scissors vs lizard vs spock</h1>
        </a>
        <p>the <span className='pink'> rock paper scissors lizard spock </span>game is an exciting and interactive single-page application that showcases my frontend development skills using <span className='purple'> react bootstrap </span>. with the integration of an <span className='aqua'> api call</span>, this project takes the classic game to the next level by allowing users to play against a computer opponent and enjoy a challenging and engaging gameplay experience.</p>
        <p>based on the popular game variation featured in <span style={{ color: 'orangered' }}> "the big bang theory," </span>players can choose from rock, paper, scissors, lizard, or spock as their moves. the game logic is implemented using <span className='react'> react components </span>and <span className='yellow'> javascript</span>, ensuring smooth and responsive gameplay.</p>
      </div>
      {/* <img src={RpslsSS} alt="" /> */}
      <Carousel
      indicators={false}
      fade >
        <Carousel.Item>
          <img
            src={RpslsSS}
            alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={RpslsActive}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={RpslsYouWin}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
