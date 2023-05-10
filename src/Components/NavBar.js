import React from 'react'
import './Navbar.css'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';

import { DiGithubBadge, IconName } from "react-icons/di";

import { SiCodewars, SiLinkedin } from 'react-icons/si';

import { AiFillFileText } from "react-icons/ai";


export default function NavBar() {
    return (
        <div className='Nav-bg'>
            <CodeOutlinedIcon className='top'/>

                <div className='entries'>
                {/* linkedIn */}
                <a href="https://www.linkedin.com/in/nharrisonw/">
                    < SiLinkedin
                    size={48}
                    fill='#fff' />
                </a>
                    {/* github icon */}
                <a href="https://github.com/nHarrisonW">
                    < DiGithubBadge 
                    size={48}
                    fill='#fff'/>
                </a>
                {/* resume */}
                <a href="../Assets/NHarrisonWilkins-resume.pdf" download>
                    < AiFillFileText
                    size={48}
                    fill='#fff' />
                </a>
                {/* codewars */}
                <a href="https://www.codewars.com/users/nHarrisonW">
                    < SiCodewars 
                    size={48}
                    fill='#fff'/>
                </a>
            
                </div>
            <CodeOffOutlinedIcon className='bottom' />
        </div>
    )
}
