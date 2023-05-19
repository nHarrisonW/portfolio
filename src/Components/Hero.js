import React from 'react'
import './Hero.css'
import logoImg from '../Assets/nhwLogoV.2.png'

export default function Hero() {
  return (    <div className='box'>
        <img src={logoImg} alt="" />
        <h1><span className='pink'> let </span><span>aspiring_junior_dev = </span><span className='white'>{'{'}</span> 
        <br/>
        <div>

        <span className='white'> name:</span> 'n. harrison wilkins'<span className='white'>,</span>
        <br/>
        <span className='white'> email:</span> <a className='' href="mailto:nwilkins@codestack.co">
          'nwilkins@codestack.co'<span className='white'>,</span></a> 
        <br/>
        <span className='white'> phone_number:</span> <a href="tel:2096122203">
          '209-612-2203'<span className='white'>,</span></a> 
        <br/>
        <span className='white'> location:</span> 'tracy, ca'<span className='white'>,</span>
        <br/>
        <span className='white'> currently_learning:</span> <span className='white'>[</span> 'react-native'<span className='white'>,</span> 'typescript'<span className='white'>,</span> 'angular' <span className='white'>]</span>
        <br/> 
        </div>
        <span className='white'>{'};'}</span>
        </h1>
        
    </div>
  )
}
