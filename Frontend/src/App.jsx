import React from 'react'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
      
    </div>
  )
}

export default App