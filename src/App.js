import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';

import {Routes, Route} from 'react-router-dom'
import Technology from './Technology';
import Sports from './Sports';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Mynews from './Mynews';

export class App extends Component {
  render() {
    return (
     <>
       <Navbar/>
       <Routes>
         <Route exact path='/' element={<Mynews/>} />
         <Route exact path='/technology' element={<Technology/>} />
         <Route exact path='/sports' element={<Sports/>} />
         <Route exact path='/business' element={<Business/>} />
         <Route exact path='/entertainment' element={<Entertainment/>} />
         <Route exact path='/health' element={<Health/>} />
       </Routes>
       
     </>
    )
  }
}

export default App