import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as LinkS} from 'react-scroll'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? 'times' : 'bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkS to='Home'                 
                smooth={true}
                duration={500}
                className='nav-links' onClick={closeMobileMenu}>
                Home
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='Skillset'
                smooth={true}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skillset
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='Case'
                smooth={true}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Case-Studies
              </LinkS>
            </li>

            <li>
              <LinkS
                to='Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
