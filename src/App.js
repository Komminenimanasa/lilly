import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Doctor from './Doctor'
import Home from './Home'
import Patient from './Patient' 
import Navigation from './Navigation'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/patient' element={<Patient/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App