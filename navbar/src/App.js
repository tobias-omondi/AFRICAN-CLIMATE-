import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Podcast from './components/Podcast';
import Contact from './components/Contact';
import Advocacy from './components/Advocacy';


function App() {
  return (
    <div className="App">
      <Router >
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/news' element ={<News/>}/>
        <Route path='/advocacy' element ={<Advocacy/>}/>
        <Route path='/podcast' element ={<Podcast/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
