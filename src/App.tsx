import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useState, useEffect } from 'react'
import './App.css'

import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Success from './components/Success/Success'

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820)

  const updateScreenState = () => {
    setDesktop(window.innerWidth > 820)
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenState)
    return () => window.removeEventListener("resize", updateScreenState)
  })
 
  return (
    <main className='app'>
      <div className='container'>
        <Router>
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
        </Router>
      </div>
      <Footer/>
    </main>

  )
}

export default App
