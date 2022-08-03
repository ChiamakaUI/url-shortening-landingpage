import React from 'react'
import logo from './Images/logo.svg'

const Header = () => {
  return (
    <nav>
        <div className='features'>
            <img src={logo} alt="Shortly"/>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
        </div>
        <div className='account-buttons'>
            <button className='login'>Login</button>
            <button className='sign-up'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Header