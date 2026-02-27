import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path=":movie" element={<Movie/>} /> 
    </Routes>
    </>
  )
}

export default App
