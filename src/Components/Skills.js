import React from 'react'
import { DiApple, DiBootstrap, DiCss3, DiHtml5, DiIllustrator, DiJsBadge, DiNodejsSmall, DiPhotoshop, DiReact, DiUnitySmall, DiVisualstudio, DiWindows } from 'react-icons/di'
import './Skills.css'
import { IconName, SiCsharp, SiFigma, SiFilezilla, SiJirasoftware, SiMicrosoftazure, SiMui, SiNotion, SiPostman, SiSlack, SiTailwindcss, SiTypescript } from "react-icons/si";




export default function Skills() {
    return (
        <div className='parent'>
        <div className='skills-area'>
            {/* dev skills */}
            <div className='lists'>
            <h5>dev skills:</h5>
                {/* React, css, js, tailwind */}
                <ul>
                    <li>
                        < DiReact
                            fill='#007BFF'
                            size={32} />
                        <p>react</p>
                    </li>
                    <li>
                        < DiCss3
                            fill='#61DAFB'
                            size={32} />
                        <p>css</p>
                    </li>
                    <li>
                        < DiJsBadge
                            fill='#F7DF1E'
                            size={32} />
                        <p>javascript</p>
                    </li>
                    <li>
                        < SiTailwindcss
                            fill='#36BDF8'
                            size={32} />
                        <p>tailwind css</p>
                    </li>
                </ul>
                {/* unity, vscode, bootstrap, csharp */}
                <ul>
                    <li>
                        < DiUnitySmall
                            size={32} />
                        <p>unity</p>
                    </li>
                    <li>
                        < DiVisualstudio
                            fill='#007ACC'
                            size={32} />
                        <p>visual studio</p>
                    </li>
                    <li>
                        < DiBootstrap
                            fill='#7952B3'
                            size={32} />
                        <p>bootstrap</p>
                    </li>
                    <li>
                        < SiCsharp
                            fill='#49BEAA'
                            size={32} />
                        <p>c#</p>
                    </li>
                </ul>
                {/* nodejs, html5, typescript */}
                <ul>
                <li>
                        < DiNodejsSmall
                            fill='#16DB65'
                            size={32} />
                        <p>node.js</p>
                    </li>
                    <li>
                        < DiHtml5
                            fill='#E44D26'
                            size={32} />
                        <p>html5</p>
                    </li>
                    <li>
                        < SiTypescript
                            fill='#3178C7'
                            size={32} />
                        <p>typescript</p>
                    </li>
                    <li>
                        < SiMui
                            fill='#007FFE'
                            size={32} />
                        <p>material ui</p>
                    </li>
                </ul>
            </div>
            {/* work flow skills */}
            <div className='lists'>
            <h5>work flow skills:</h5>
                {/* slack, jira, azure */}
                <ul>
                    <li>
                        < SiSlack
                            fill='#fff'
                            size={32} />
                        <p>slack</p>
                    </li>
                    <li>
                        < SiMicrosoftazure
                            fill='#0078D3'
                            size={32} />
                        <p>azure</p>
                    </li>
                    <li>
                        < DiApple
                            fill='#fff'
                            size={48} />
                        <p>mac + ios</p>
                    </li>
                    <li>
                        < SiFilezilla
                            fill='#B50101'
                            size={48} />
                        <p>filezilla</p>
                    </li>
                    
                </ul>
                {/* jira, windows, postman, notion */}
                <ul>
                <li>
                        < SiJirasoftware
                            fill='#2484FF'
                            size={32} />
                        <p>jira</p>
                    </li>
                    <li>
                        < SiPostman
                            fill='#F86837'
                            size={48} />
                        <p>postman</p>
                    </li>
                    <li>
                        < DiWindows
                            fill='#0078D3'
                            size={48} />
                        <p>windows</p>
                    </li>
                    <li className='white-bg'>
                        < SiNotion
                            fill='#000'
                            size={48} />
                        <p>notion</p>
                    </li>
                </ul>
            </div>
            {/* ui/ux skills */}
            <div className='lists'>
            <h5>ui/ux skills:</h5>
                {/* figma, illustrator, phostoshop */}
                <ul>
                    <li>
                        < SiFigma
                            fill='#fff'
                            size={48} />
                        <p>figma</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        < DiIllustrator
                            fill='#F7931C'
                            size={48} />
                        <p>illustrator</p>
                    </li>
                </ul>
                <ul>
                <li>
                        < DiPhotoshop
                            fill='#3FA9F5'
                            size={48} />
                        <p>photshop</p>
                    </li>
                </ul>
            </div>
        </div>
        <div>

        </div>
    </div>
    )
}
