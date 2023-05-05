import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../pages/Registration'
import ViewUsers from '../pages/ViewUsers'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<Registration />}/>
        <Route path='/users' element={<ViewUsers />}/>
    </Routes>
  )
}

export default AllRoutes