import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
        <Home/>
    </div>
  );
}

export default App;
