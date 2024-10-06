import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { CountryNameProvider } from './context/CountryName'
import React from 'react'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'


function App() {


  return (
    <CountryNameProvider>
     <Header /> 
     <Main />
     <Footer />
    </CountryNameProvider>
  )
}

export default App
