import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './page/About'
import Home from './page/Home'
import PopularDish from './page/PopularDish'
import StandoutDishes from './page/StandoutDishes'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Home/>
      <PopularDish />
      <StandoutDishes />
      <About />
      <Footer />
    </div>

  )
}

export default App
