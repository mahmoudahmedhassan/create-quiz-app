import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='title'> intuitive quiz hub</Link>
         </div>
    )
}

export default Header
