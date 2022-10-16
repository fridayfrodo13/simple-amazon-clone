import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav className="NavBar">
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/manage">Manage Inventory Here</a>
      </nav>
    </div>
  )
}

export default Header