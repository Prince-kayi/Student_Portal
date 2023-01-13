import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Navbar from './Display/Navbar';
import Routers from './Routers';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routers/>
    </div>
    </BrowserRouter>
  );
}

export default App;
