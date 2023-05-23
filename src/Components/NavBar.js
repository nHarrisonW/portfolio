// NavBar.js
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { SiLinkedin, SiCodewars } from 'react-icons/si';
import {DiGithubBadge} from 'react-icons/di'
import { AiFillFileText } from 'react-icons/ai';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import './Navbar.css'
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import resume from '../Assets/NHarrisonWilkins-resume.pdf'

const NavBar = ({ theme, toggle_night, handle_mode }) => {
  return (
    <div className={`Nav-bg ${theme}`}>
      <CodeOutlinedIcon className='top' />
      {/* dark/light state */}
      {toggle_night ? (
        <FaMoon size={32} onClick={handle_mode} className='top m-4' />
      ) : (
        <FaSun size={32} onClick={handle_mode} className='top m-4' />
      )}

      <div className='entries'>
        <a href=''></a>
        {/* linkedIn */}
        <a target={'_blank'} href='https://www.linkedin.com/in/nharrisonw/'>
          <SiLinkedin className='entryIco' size={48} fill='#fff' />
        </a>
        {/* github icon */}
        <a target={'_blank'} href='https://github.com/nHarrisonW'>
          <DiGithubBadge className='entryIco' size={48} fill='#fff' />
        </a>
        {/* resume */}
        <a target={'_blank'} href={resume} download>
          <AiFillFileText className='entryIco' size={48} fill='#fff' />
        </a>
        {/* codewars */}
        <a target={'_blank'} href='https://www.codewars.com/users/nHarrisonW'>
          <SiCodewars className='entryIco' size={48} fill='#fff' />
        </a>
      </div>
      <CodeOffOutlinedIcon className='bottom' />
    </div>
  );
};

export default NavBar;
