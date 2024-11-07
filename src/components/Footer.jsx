import React from 'react';
import PageLinks from './PageLinks';
import IconLinks from './IconLinks';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' id='' />
        {/* <ul className='footer-links'>
            <li><a href='#home' className='footer-link'>Home</a></li>
            <li><a href='#about' className='footer-link'>About</a></li>
            <li><a href='#services' className='footer-link'>Services</a></li>
            <li><a href='#tours' className='footer-link'>Tours</a></li>
        </ul> */}
      <IconLinks parentClass='footer-icons' itemClass='footer-icon' />
        {/* <ul className='footer-icons'>
            <li><a href='https://facebook.com' className='footer-icon'><i className='fa-brands fa-facebook'></i></a></li>
            <li><a href='https://twitter.com' className='footer-icon'><i className='fa-brands fa-twitter'></i></a></li>
            <li><a href='https://whatsapp.com' className='footer-icon'><i className='fa-brands fa-whatsapp'></i></a></li>
        </ul> */}
      <p className='copyright'>
        copyright &copy; Travel tours company <span id='date'>{date}</span> all right reserved
      </p>
    </footer>
  );
}

export default Footer
