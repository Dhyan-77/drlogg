import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  return (
    <div className='bg-zinc-900 h-screen w-screen'>
      <Header/>
      <Routes>
         <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App