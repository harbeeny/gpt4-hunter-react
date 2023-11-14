import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

// BEM -> Block element Modifier

const Navbar = () => {
  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar