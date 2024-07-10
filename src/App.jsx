import { useState } from 'react'
import '/node_modules/primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import quato from './assets/Images/quato.jpg'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Notfund from './pages/notfund';
import Home from './pages/Home';


import "./App.css";
import Login from "./Components/Login/Login";


function App() {
  

  return (
    <div className="App">
     <Login/>
    </div>
  )
}

export default App;