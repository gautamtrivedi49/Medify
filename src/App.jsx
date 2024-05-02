import React from 'react'
import Navbar from './components/Home/Navbar'
import SearchBox from './components/Home/SearchBox'
import Card from './components/Home/Card'
import Team from './components/Home/Team'
import Specialisation from './components/Home/Specialisation'
import Patient from './components/Home/Patient'
import Family from './components/Home/Family'
const App = () => {
  return (
    <>
    <Navbar />
    <SearchBox /> 
    <Card />
    <Specialisation />
    <Team />
    <Patient />
    <Family />
    </>
    
  )
}

export default App