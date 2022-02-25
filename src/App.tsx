import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom'
import MenuInfo from './components/Menu_info';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Menu_Info' element={<MenuInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
