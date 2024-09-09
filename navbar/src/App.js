import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import CurrentCampain from './components/Advocacy/CurrentCampain';
import NewsLatter from './components/Contact/NewsLatter';
import PanelDiscusion from './components/Multimedia/PanelDiscusion';
import Investigative from './components/News/Investigative';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Community_Spotlight from './components/News/Community_Spotlight';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      {/* Conditionally render Navbar */}
      { !location.pathname.startsWith('/admin') && <Navbar /> }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/investigative' element={<Investigative />} />
        <Route path='/news/community-spotlight' element={<Community_Spotlight />} />
        <Route path='/multimedia' element={<Multimedia />} />
        <Route path='/multimedia/panel-discussion' element={<PanelDiscusion />} />
        <Route path='/advocacy' element={<Advocacy />} />
        <Route path='/advocacy/policy' element={<Policy />} />
        <Route path='/advocacy/success' element={<SuccessStories />} />
        <Route path='/advocacy/current' element={<CurrentCampain />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/newsletter' element={<NewsLatter />} />
        <Route path='/admin/*' element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

// Use Router to wrap App for useLocation to work
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
