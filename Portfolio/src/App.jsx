import { useState } from 'react'
// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from "./Components/navbar"
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from "./Components/contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App