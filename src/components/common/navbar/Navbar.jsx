import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar (){

    return(
        <section className="navbar">
            <li><Link to="/" className="navbar-item">Home</Link></li>
            <li><Link to="/about" className="navbar-item">About</Link></li>
            <li><Link to="/work" className="navbar-item">Work and Projects</Link></li>
            {/*<a href='https://drive.google.com/file/d/1MfC2ZeYq-jaYmLgW7jtlQJQMbIkwWodj/view?usp=sharing' className='no'><li className="navbar-item">Resume</li></a> */}
            <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        </section>
    )
}

export default Navbar;