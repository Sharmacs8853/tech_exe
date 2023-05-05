import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='box-container'>
            <div><Link className='link' to='/'>Home</Link></div>
            <div><Link className='link' to='/register'>Registration</Link></div>
            <div><Link className='link' to='/users'>View User</Link></div>
        </div>
    </div>
  )
}

export default Navbar