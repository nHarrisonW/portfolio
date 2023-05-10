import React from 'react'
import { CssOutlinedIcon } from '@mui/icons-material/CssOutlined';
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
        <span className='white'> age:</span> '22',
        <br/>
        <span className='white'> location:</span> 'tracy, ca'
        {/* <br/>
        <span className='white'> hobbies:</span> <span className='white'>[</span> 'fitness, gaming' <span className='white'>]</span> */}
        <br/> <span className='white'>{'};'}</span>
        </h1>
        
    </div>
  )
}
