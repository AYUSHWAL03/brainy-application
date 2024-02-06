
import React,{useEffect} from "react";
import './App.css';
import Footer from './Components/Footer';
import NavbarGen from './Components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';
import FeaturePage from './Pages/FeaturePage';
import ProductPage from './Pages/ProductPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
            <Router>
        <NavbarGen/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/contact' element={<ContactUsPage/>}/>
                <Route path='/feature' element={<FeaturePage/>}/>
                <Route path='/product' element={<ProductPage/>}/>
                <Route path='*' element={<HomePage/>}/>
              </Routes>
            </Router>
        <Footer/>
    </div>
  );
}

export default App;
