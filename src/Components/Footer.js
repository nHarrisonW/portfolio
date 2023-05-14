import React from 'react'
import './Footer.css'


export default function Footer() {
  const newDate = new Date();
  
  return (
    <div className='footer'>
        <h5>thanks for visiting at my portfolio, visit the links on the left to learn some more about me!</h5>
        <h6>if you would like to connect, email me: <span>nwilkins@codestack.co</span></h6>
        <h6>or call/ text: <span className='green'>209-612-2203</span></h6>
        <h6>last edit: {newDate. toLocaleDateString()}</h6>
    </div>
  )
}
