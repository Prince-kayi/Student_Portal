import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Student from './Pages/Student'
import About from './Pages/About'
import Upload from './Pages/Upload'
import L from './Pages/L'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Inova from './Pages/Inova'
import Study from './Pages/Study'
import Contact from './Display/Contact'
import Academic from './Pages/Academic'
const Routers = () => {
  return (
    <div>
       
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/current' element={<Student />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/teach' element={<L />} />
        <Route path='/research' element={<Inova />} />
        <Route path='/study' element={<Study />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/academic' element={<Academic/>} />
      </Routes>
    
    </div>
  )
}

export default Routers
