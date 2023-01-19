import React from 'react';
import Pagelinks from './Pagelinks';
import Sociallinks from './Sociallinks';

function Footer() {
  return (
    <footer className='section footer'>
      {/* FOOTER PAGE LINKS */}
      <Pagelinks parentClass='footer-links' itemClass='footer-link' />

      {/* ----ALTERNATIVE APPROACH ---- */}
      {/* <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={`#${href}`} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      <Sociallinks parentClass='footer-icons' itemClass='footer-icon' />

      {/* ----ALTERNATIVE APPROACH ---- */}
      {/* FOOTER SOCIAL LINKS */}
      {/* <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
