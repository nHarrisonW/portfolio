import React from 'react'
import './businessRedesign.css'
import redesignBefore from '../Assets/CamaOldHero.png'
import redesignBefore2 from '../Assets/CamaOldFooter.png'
import redesignAfter from '../Assets/CamaNewHero.png'
import redesignFooter from '../Assets/CamaNewFooterSS.png'
import { Carousel } from 'react-bootstrap'

export default function CamaProject() {
    return (
        <div className='Cama'>

            <Carousel
                indicators={false}
                fade >
                <Carousel.Item>
                    <img
                        src={redesignBefore2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>before</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={redesignBefore}
                        alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={redesignFooter}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p>after</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={redesignAfter}
                        alt="fourth slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div>
                <a href="https://teamcamasite.azurewebsites.net/">

                    <h1>business redesign</h1>

                </a>
                <p>this project involves redesigning the website for a local gym using <span className='purple'>react-bootstrap</span> . the main objective is to enhance the user experience and improve the user interface by implementing a<span className='pink'> responsive </span>design. it was also made in collaboration with another student, utilizing <span className='green'>git</span></p>

                <p>i aim to showcase my<span className='aqua'> creative ability </span>and understanding of<span className='yellow'> ui/ux </span>principles. the goal is to provide a <span >seamless</span> and enjoyable user experience that not only highlights the gym's unique features but also encourages users to explore and engage with the website's content.</p>
            </div>
        </div>
    )
}
