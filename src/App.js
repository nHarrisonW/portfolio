import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import AdvGenerator from './Components/advGenerator';
import Rpsls from './Components/Rpsls';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className='parent-bg'>
      <div>
        
        < NavBar/>

      </div>
      <div className='body'>
        
        < Hero />
        < Skills />
        < AdvGenerator />
        < Rpsls />
        < Footer />

      </div>
    </div>
  );
}

