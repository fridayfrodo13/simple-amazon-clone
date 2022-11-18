import React from 'react'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>

        <NavLink to="/inventory">Manage Inventory Here</NavLink>
      </nav>
    </div>
  )
}

export default Header
