import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import News from './components/News/News';
import Podcast from './components/Podcast';
import Contact from './components/Contact/Contact';
import Advocacy from './components/Advocacy/Advocacy';
import Multimedia from './components/Media/Multimedia';
import Policy from './components/Advocacy/Policy';
import SuccessStories from './components/Advocacy/SuccessStories';
import ScrollToTop from './components/Scroll/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Router >
        <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/news' element ={<News/>}/>
        <Route path='/multimedia' element ={<Multimedia/>}/>
        <Route path='/advocacy' element ={<Advocacy/>}/>
        <Route path='/advocacy/policy' element ={<Policy/>}/>
        <Route path='/advocacy/success' element ={<SuccessStories/>}/>
        <Route path='/podcast' element ={<Podcast/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
