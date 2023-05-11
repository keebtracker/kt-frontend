import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages';
import Builds from './pages/builds';
import Parts from './pages/parts';
import Wishlist from './pages/wishlist';
import Sold from './pages/sold';


function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/builds' element={<Builds/>} />
        <Route path='/parts' element={<Parts/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/sold' element={<Sold/>} />
    </Routes>
    </Router>
  );
}

export default App;
