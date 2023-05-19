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

export default function NavBar() {
    return (
        <div className='Nav-bg'>
            <CodeOutlinedIcon className='top'/>
                    < DarkModeIcon className='top m-5 '/>


                <div className='entries'>
                    <a href="">

                    </a>
                {/* linkedIn */}
                <a
                target={'_blank'} 
                href="https://www.linkedin.com/in/nharrisonw/">
                    < SiLinkedin
                    size={48}
                    fill='#fff' />
                </a>
                    {/* github icon */}
                <a 
                target={'_blank'} 
                href="https://github.com/nHarrisonW">
                    < DiGithubBadge 
                    size={48}
                    fill='#fff'/>
                </a>
                {/* resume */}
                <a 
                target={'_blank'} 
                href={resume} download>
                    < AiFillFileText
                    size={48}
                    fill='#fff' />
                </a>
                {/* codewars */}
                <a 
                target={'_blank'} 
                href="https://www.codewars.com/users/nHarrisonW">
                    < SiCodewars 
                    size={48}
                    fill='#fff'/>
                </a>
            
                </div>
            <CodeOffOutlinedIcon className='bottom' />
        </div>
    )
}
