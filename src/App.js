import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CssOutlinedIcon from '@mui/icons-material/CssOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import AdvGenerator from './Components/advGenerator';
import Rpsls from './Components/Rpsls';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='parent-bg'>
      <div className=''>
        
        < NavBar/>

      </div>
      <div className='body'>
        
        < Hero />
        < Skills />
        < AdvGenerator />
        < Rpsls />

      </div>
    </div>
  );
}

export default App;
