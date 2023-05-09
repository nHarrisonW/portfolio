import React from 'react'
import { CssOutlinedIcon } from '@mui/icons-material/CssOutlined';
import './Hero.css'
import logoImg from '../Assets/nhw-logo-blue-removebg-preview.png'

export default function Hero() {
  return (
    <div className='box'>
        <img src={logoImg} alt="" />
        <h1>N. Harrison Wilkins</h1>
        <h2>a 22 year old aspiring junior dev from tracy, california!</h2>
    </div>
  )
}
