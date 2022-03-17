import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom'
import MenuInfo from './components/Menu_info';
import HomeBusiness from './components/HomeBusiness'
import HomeBusinessDetail from './components/HomeBusinessDetail';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Menu-Info' element={<MenuInfo/>}/>
        <Route path='/Home-Business' element={<HomeBusiness/>} />
        <Route path='/Home-Business-Detail' element={<HomeBusinessDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
