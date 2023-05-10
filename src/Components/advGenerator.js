import React from 'react'
import './advGenerator.css'
import advGeneratorSS from '../Assets/advGeneratorInactive.png'
import advGeneratorActive from '../Assets/adv-active-SS.png'
import { Carousel } from 'react-bootstrap'

export default function AdvGenerator() {
  return (
    <div className='Generator'>

      {/* <Carousel
      fade 
      indicators={false} >
        <Carousel.Item>
          <img
            src={advGeneratorSS}
            alt="" />
        <Carousel.Caption>
          <p>inactive</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={advGeneratorActive}
            alt="Second slide"
          />
        <Carousel.Caption>
          <p>active</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}


      <img
        src={advGeneratorSS}
        alt="advice gen image" />


      {/* <p>this project utilizes the <a href="https://api.adviceslip.com">advice slip api</a>, and was created using react-bootstrap</p> */}
      <div>
        <a href="https://wilkinshadvicegenerator.azurewebsites.net/">

          <h1>advice generator</h1>

        </a>
        <p>the advice generator is a web application developed using <span className='react'>react</span> and <span className='purple'>react-bootstrap</span> . it was created as a project for <a href="">frontend mentor</a>, with the goal of providing users with random advice and <span className='pink'> inspiration </span>sourced from the <a href="https://api.adviceslip.com">advice slip api</a>.</p>
        <p>by including the advice generator in my portfolio, i want to highlight my skills in <span className=''> frontend development </span>and showcase my ability to create engaging and <span className='yellow'> functional applications</span>. this project exemplifies my capability to follow a design, technical expertise, and api integration to deliver a valuable user experience.</p>
      </div>



    </div>
  )
}
