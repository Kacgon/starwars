import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Container, Nav} from 'react-bootstrap'
import Films from './pages/Films'
import People from './pages/People'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Starships from './pages/Starships'
import Vechicle from './pages/Vechicle'
import { HomePage } from './pages/HomePage'
import {Navbar} from './components/Navbar'

function App() { 
  return (

  <>
    <Navbar />
  <Container className='mb-4'> 
    <Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/Films' element={<Films/>} />
  <Route path='/People' element={<People/>} />
  <Route path='/Planets' element={<Planets/>} />
  <Route path='/Species' element={<Species/>} />
  <Route path='/Starships' element={<Starships/>} />
  <Route path='/Vechicle' element={<Vechicle/>} />


    </Routes>


  </Container>
  </>
  )
}


export default App
