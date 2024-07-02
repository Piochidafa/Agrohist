import { useState } from 'react'
import '/node_modules/primeflex/primeflex.css'
import quato from './assets/Images/quato.jpg'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Notfund from './pages/notfund';



function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>SEXO</h1>}/>
          <Route path='*' element={<Notfund/>}/>
        </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
