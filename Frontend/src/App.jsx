import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/doctor'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import MyProfile from './pages/myprofile'
import MyAppointment from './pages/myappointment'
import Appointement from './pages/Appointement'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route  path ="/" element={<Home/>} />
        <Route  path ="/doctors" element={<Doctor/>} />
        <Route  path ="/doctors/:speciality" element={<Doctor/>} />
        <Route  path ="/login" element={<Login/>} />
        <Route  path ="/about" element={<About/>} />
        <Route  path ="/contact" element={<Contact/>} />
        <Route  path ="/my-profile" element={<MyProfile/>} />
        <Route  path ="/my-appointement" element={<MyAppointment/>} />
        <Route  path ="/appointement/:docId" element={<Appointement/>} />
        <Route path="*" element={<div>Page Not Found</div>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
