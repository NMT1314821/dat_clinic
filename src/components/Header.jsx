import React from 'react'
import './Header.css'
import logo from '../assets/logo.jpeg'
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <Image className='logo' src={logo} />
            </Link>
            <div><Link to="/about" style={{ color: '#000000' }}>About Clinic</Link></div>
            <div><Link to="/founder" style={{ color: '#000000' }}>Founder</Link></div>
            <div>Request For Appointment</div>
            <div>Location</div>
            <div>Feedback</div>
            <div>Log In</div>
            <div className='header__input'><input placeholder='Search' /></div>
        </div>
    )
}

export default Header