import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}
