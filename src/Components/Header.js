import React from 'react'
import {Link} from 'react-router-dom'
import './css/header.css'

export default function Header(props) {
    return (
        <div className='nav'>
            <h1>SHELFIE</h1>
            <Link to="/" className="Dashboard">Dashboard</Link>
            <Link to="/add" className="addInventory">Add Inventory</Link>
        </div>
    )
}
