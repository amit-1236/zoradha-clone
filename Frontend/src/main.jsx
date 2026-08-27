import ReactDom from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Landing_page/signup/SignUp.jsx';
import Homepage from './Landing_page/Home/HomePage.jsx';
import Pricing from './Landing_page/pricing/PricingPage.jsx';
import About from './Landing_page/about/About.jsx';
import Products from './Landing_page/products/Universe.jsx';
import Support from './Landing_page/support/Support.jsx';
import Navbar from './Landing_page/Navbar.jsx'; 
import './index.css'
import App from './App.jsx'
import HomePage from './Landing_page/Home/HomePage.jsx';
import Footer from './Landing_page/Fotoor.jsx';
import NotFound from './Landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <Navbar />
  <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Signup" element={<SignUp/>} ></Route>
      <Route path="/Homepage" element={<Homepage/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Support" element={<Support/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
)
