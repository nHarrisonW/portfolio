import React from 'react'
import './Rpsls.css';

import RpslsSS from '../Assets/RpslsSS.png';

export default function Rpsls() {
  return (
    <div className='Game'>
        <div>

        <p>the rock paper scissors lizard spock game is an exciting and interactive single-page application that showcases my frontend development skills using react bootstrap. with the integration of an api call, this project takes the classic game to the next level by allowing users to play against a computer opponent and enjoy a challenging and engaging gameplay experience.</p>
        <p>based on the popular game variation featured in "the big bang theory," players can choose from rock, paper, scissors, lizard, or spock as their moves. the game logic is implemented using react components and javascript, ensuring smooth and responsive gameplay.</p>
        </div>
        <img src={RpslsSS} alt="" />
    </div>
  )
}
