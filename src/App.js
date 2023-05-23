import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import AdvGenerator from './Components/advGenerator';
import Rpsls from './Components/Rpsls';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import CamaProject from './Components/businessRedesign';
import { useState, useEffect } from 'react';
import logoImg from './Assets/nhw-logo-blue-removebg-preview.png'
import AboutMe from './Components/AboutMe';

export default function App() {

  let aspiring_junior_dev = {
    name: 'Nigel Harrison Wilkins',
    email: 'nwilkins@codestack.co',
    phone_number: '209-612-2203',
    location: 'Tracy, California',
    currently_learning: ['React-Native', 'TypeScript', 'Angular'],
    hobbies: ['Sim-Racing', 'Weight-Lifting', 'Basketball']
  }


  // handling mode
  const [theme, set_theme] = useState('dark');
  const [toggle_night, set_toggle_night] = useState(true);

  const handle_mode = () => {
    if (theme === 'dark') {
      set_theme('light')
    } else {
      set_theme('dark')
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [showAboutMe, setShowAboutMe] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('Ready to go!');
      console.log('Name:' + aspiring_junior_dev.name)
      console.log('My Email:' + aspiring_junior_dev.email)
      console.log('My Phone Number:' + aspiring_junior_dev.phone_number)
      console.log('I live in:' + aspiring_junior_dev.location)
      console.log('I\'m currently learning/practicing: {')
      for (let i = 0; i < aspiring_junior_dev.currently_learning.length; i++) {
        console.log(aspiring_junior_dev.currently_learning[i]);
      }
      console.log('}')

      console.log('My hobbies:')
      for (let i = 0; i < aspiring_junior_dev.hobbies.length; i++) {
        console.log(aspiring_junior_dev.hobbies[i]);
      }

    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.querySelector('.parent-bg').classList.add('loaded');
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <div className="loading-text"></div>
        </div>
      ) : (
        <div className={`parent-bg ${theme}`}>
          <div className="nav">
            <NavBar theme={theme} toggle_night={toggle_night} handle_mode={handle_mode} />
          </div>
          <div className="body">
            <Hero />
            <Skills />
            <CamaProject />
            <Rpsls />
            <AdvGenerator />
            <button className={`${showAboutMe ? 'active' : ''}`} id='AboutMe' onClick={() => setShowAboutMe(!showAboutMe)}>
              {showAboutMe ? 'collapse' : 'expand'} about me section
            </button>
            {showAboutMe && <AboutMe />}

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
