import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className='navbar-container'>
            <div className='nav-logo'>
                <h1>
                    <Link to="/" className='logo'>PUT</Link>
                    <div className='pic'>
                    <img src="https://images.cdn1.stockunlimited.net/preview1300/university-logo-design_1970415.jpg" 
          className='image' alt='university'/>
          </div>
                </h1>
                </div>
                <div className='search-container'>
                    <div className='search-group'>
                        <input
                            type="text"
                            name='search'
                            placeholder='Type to Search...'
                            className='search-in'
                        />
                        &nbsp;
                        <button className='look'>Search</button>
                    </div>
            </div>  
            </header>
            <div className='bar'>
            <div className='navbar-links'>
                <ul>
                    <li>
                        <Link to="/about">About Us&nbsp; </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/current">Current&nbsp; Student </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/teach">Teaching and&nbsp; Learning </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/research">Research and&nbsp; Innovation</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/study">Study at PUT&nbsp;</Link>
                    </li>
                </ul>
                <ul>
                    <li >
                        <Link to="/contact">Contact&nbsp; Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Logout<i class="fas fa-user" /> </Link>
                    </li>
                </ul>
            </div>
            </div>
      
    </>
  )
}

export default Navbar
