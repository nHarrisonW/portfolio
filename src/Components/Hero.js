import React from 'react'
import './Hero.css'
import logoImg from '../Assets/nhw-logo-blue-removebg-preview.png'

export default function Hero() {
    
  return (
    <div className='box'>
        <img src={logoImg} alt="" />
        <h1><span className='pink'> let </span><span>aspiring_junior_dev = </span><span className='white'>{'{'}</span> 
        <br/>
        <span className='white'> name:</span> 'n. harrison wilkins',
        <br/>
        <span className='white'> email:</span> <a className='' href="mailto:nwilkins@codestack.co">
          'nwilkins@codestack.co',</a> 
        <br/>
        <span className='white'> number:</span> <a href="tel:2096122203">
          '209-612-2203',</a> 
        <br/>
        <span className='white'> location:</span> 'tracy, ca',
        <br/>
        <span className='white'> currently learning:</span> <span className='white'>[</span> 'react-native, typescript, angular' <span className='white'>]</span>
        <br/> <span className='white'>{'};'}</span>
        </h1>
        
    </div>
  )
}
