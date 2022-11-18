import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="App-Header">
      <h1>Welcome to Amazon Clone</h1>
      <NavLink className="BtnX" to="/shop">
        Visit Shop Page Here
      </NavLink>
    </div>
  )
}

export default Home
