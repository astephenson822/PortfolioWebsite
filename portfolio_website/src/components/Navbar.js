import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Andrew Stephenson
            </Link> 
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about_me' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                        Education
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/my_work' className='nav-links' onClick={closeMobileMenu}>
                        My Work
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resume' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Resume
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' to='/resume'>Resume</Button>}
        </div>
    </nav>
  )
}

export default Navbar