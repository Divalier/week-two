import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Asion from  './asion'
import Nav from  './Nav'

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  
  render() {
    return(
      <div>
        
        <BrowserRouter>
        <Routes>
          <Route index element={<Nav/>}/>
          <Route path="/Dashbord" element={<Asion/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
    }
    
  }


export default App