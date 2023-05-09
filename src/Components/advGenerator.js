import React from 'react'
import './advGenerator.css'
import advGeneratorSS from '../Assets/advice-generator-ss.png'

export default function AdvGenerator() {
  return (
    <div className='Generator'>
        <img src={advGeneratorSS} alt=""/>
        {/* <p>this project utilizes the <a href="https://api.adviceslip.com">advice slip api</a>, and was created using react-bootstrap</p> */}
        <div>
        <p>the advice generator is a web application developed using <span>react</span> and <span>react-bootstrap</span> . it was created as a project for frontend mentor, with the goal of providing users with random advice and inspiration sourced from the <a href="https://api.adviceslip.com">advice slip api</a>.</p>
        <p>by including the advice generator in my portfolio, i aim to highlight my skills in frontend development and showcase my ability to create engaging and functional applications. this project exemplifies my capability to combine creativity, technical expertise, and api integration to deliver a valuable user experience.</p>
        </div>
    </div>
  )
}
