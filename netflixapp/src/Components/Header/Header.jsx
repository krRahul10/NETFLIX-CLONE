import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import { ImSearch } from 'react-icons/im'
const Header = () => {
    // console.log(logo)
  return (
    <nav className='header'>
      <img src={logo} alt="logo" />
      <div>
        <Link to=''>TV Shows</Link>
        <Link to=''>Movies</Link>
        <Link to=''>Recently Added</Link>
        <Link to=''>My List</Link>
      </div>
      <ImSearch/>
    </nav>
  )
}

export default Header
