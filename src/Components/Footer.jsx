import React, { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({}) => {
  const { token, setToken } = useContext(AppContext);

  const location = useLocation();

  const handleLogout = () => {
    setToken('');
  };

  return (
    <>
      <div className='footer-container' id='footer-container'>
        <div className='footer-link-container'>
          {location.pathname !== '/' && (
            <Link to='/' className='footer-link' id='footer-link'>
              <p className='footer-link-button'>HOME</p>
            </Link>
          )}
          {location.pathname !== '/about' && (
            <Link to='/about' className='footer-link' id='footer-link'>
              <p className='footer-link-button'>ABOUT</p>
            </Link>
          )}
          {location.pathname !== '/contact' && (
            <Link to='/contact' className='footer-link' id='footer-link'>
              <p className='footer-link-button'>CONTACT</p>
            </Link>
          )}
          {location.pathname !== '/schedule' && (
            <Link to='/schedule' className='footer-link' id='footer-link'>
              <p className='footer-link-button'>SCHEDULE</p>
            </Link>
          )}
          {location.pathname !== '/admin' &&
            location.pathname !== '/authorize' && (
              <Link to='/admin' className='footer-link' id='footer-link'>
                <p className='footer-link-button'>ADMIN</p>
              </Link>
            )}
          {token !== '' && (
            <div className='footer-link' id='footer-link'>
              <p onClick={handleLogout} className='footer-link-button'>
                LOGOUT
              </p>
            </div>
          )}
        </div>
        <p className='footer-text'>© Copyright 2024 LUIS PEGUERO</p>
      </div>
    </>
  );
};

export default Footer;
