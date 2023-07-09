import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useState, useEffect } from 'react'
import './App.css'

import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Success from './components/Success/Success'

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820)

  //const baseURL = process.env.PUBLIC_URL;

  const updateScreenState = () => {
    setDesktop(window.innerWidth > 820)
  }

  useEffect(() => {
    console.log(import.meta.env.PUBLIC_URL)
    window.addEventListener("resize", updateScreenState)
    return () => window.removeEventListener("resize", updateScreenState)
  })
 
  return (
    <main className='app'>
      <div className='container'>
        <BrowserRouter basename='/newsletter-sign-up'>
          <Routes>
            <Route path='/' element={
              <Login isDesktop={isDesktop}/>
            }>
            </Route>
            <Route path='/success' element={
              <Success/>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </main>

  )
}

export default App
