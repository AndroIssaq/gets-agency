import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes , Route , useLocation } from 'react-router'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import ProjectPage from './pages/ProjectPage'
function App() {
  const [count, setCount] = useState(0)
const {pathname}= useLocation()
console.log(pathname);
useEffect(()=>{
  window.scrollTo(0,0)
},[pathname])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About Us" element={<AboutUs/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact Us" element={<ContactUs/>}/>
        <Route path="/projectPage/:projectTitle" element={<ProjectPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
