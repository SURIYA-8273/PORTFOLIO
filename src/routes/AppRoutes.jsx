import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
const AppRoutes = () => {
  return (
 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
 
  
  )
}

export default AppRoutes