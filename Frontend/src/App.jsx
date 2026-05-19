import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App