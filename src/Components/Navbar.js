import React from 'react';
import logo from '../images/logo.svg';
import Pagelinks from './Pagelinks';
import Sociallinks from './Sociallinks';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        {/*PAGE LINKS*/}
        <Pagelinks parentClass='nav-links' itemClass='nav-link' />

        {/* ----Alternative Approach ----- */}
        {/* <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={`#${href}`} className='nav-link'>
                  {' '}
                  {text}{' '}
                </a>
              </li>
            );
          })}
        </ul> */}

        <Sociallinks parentClass='nav-icons' itemClass='nav-icon' />

        {/* ----Alternative Approach ----- */}
        {/* SOCIAL LINKS */}
        {/* <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
