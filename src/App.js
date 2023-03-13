import React from 'react';
//import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignUp from './components/SignUp/SignUp';




function App() {
  return (
    <>
    <Router> 
    <Routes>
      <Route path='/home'  element={ <Home/> }/>
      <Route path='/'  element={ <SignUp/> }/> 
    </Routes>
    </Router>
    </>
  )
 
}

export default App;
