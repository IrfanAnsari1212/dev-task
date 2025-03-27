import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
const Navbar = () => {
  return (
    <nav className='container'>

      <img src={logo} alt='ViVid ai' className='logo'/>
      <ul className='nav-links'>
        <li>BLOG</li>
        <li>TOOLS</li>
        <li>API</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
        <li><button className='btn'>GET STARTED</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
