import React from 'react';
import { Navbar} from '../../common';
import './Header.css';
import logo from './logo.svg';
import picture from './linkedin.svg';


function Header (){

    return(
        <div>
        <section className= "header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo"> <img src={logo} alt='Logo' className='tyler'></img> </a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>
                </section>
            </section>
            <section className="header-bottom">
            </section>
        </section>

        <div className='Footer'>
        
        <a href='https://www.linkedin.com/in/tyler-taaca/'> <img src={picture} alt='Linkedin' className='link'></img></a>
        
        </div>
        </div>
    )
}

export default Header;
