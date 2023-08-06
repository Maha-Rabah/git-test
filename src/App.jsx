import './App.css';
import { useState , useEffect } from 'react';
import Header from './component/Header/Header';
import NavBar from './component/NavBar/NavBar';
import logo from './assets/images/logo.png'
import Home from './View/Home';


function App() {
 
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
