import React from 'react'
import './Navbar.css'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import resume from '../Assets/NHarrisonWilkins-resume.pdf'

import { DiGithubBadge, IconName } from "react-icons/di";
import { SiCodewars, SiLinkedin } from 'react-icons/si';
import { AiFillFileText } from "react-icons/ai";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FaSun ,FaMoon } from "react-icons/fa";
import { useState } from 'react'


export default function NavBar() {

    const [theme, set_theme] = useState('dark');
    const [toggle_night, set_toggle_night]=useState(true);

    const handle_mode=()=>{
        set_toggle_night(!toggle_night)
        if (theme === 'dark') {
            set_theme('light')
        }else{
            set_theme('dark')
        }
    }

    return (
        <div className={`Nav-bg ${theme}`}>
            <CodeOutlinedIcon className='top'/>
            {/* dark/light state */}
            {toggle_night ? (
                    < FaMoon size={32} onClick={handle_mode} className='top m-4'/>
                ):(
                    < FaSun size={32} onClick={handle_mode} className='top m-4'/>
                )}


                <div className='entries'>
                    <a href="">

                    </a>
                {/* linkedIn */}
                <a
                target={'_blank'} 
                href="https://www.linkedin.com/in/nharrisonw/">
                    < SiLinkedin
                    className='entryIco'
                    size={48}
                    fill='#fff' />
                </a>
                    {/* github icon */}
                <a 
                target={'_blank'} 
                href="https://github.com/nHarrisonW">
                    < DiGithubBadge 
                    className='entryIco'
                    size={48}
                    fill='#fff'/>
                </a>
                {/* resume */}
                <a 
                target={'_blank'} 
                href={resume} download>
                    < AiFillFileText
                    className='entryIco'
                    size={48}
                    fill='#fff' />
                </a>
                {/* codewars */}
                <a 
                target={'_blank'} 
                href="https://www.codewars.com/users/nHarrisonW">
                    < SiCodewars 
                    className='entryIco'
                    size={48}
                    fill='#fff'/>
                </a>
            
                </div>
            <CodeOffOutlinedIcon className='bottom' />
        </div>
    )
}
