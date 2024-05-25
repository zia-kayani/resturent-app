import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>New York City Street 45 London Road</p>
        <p className='p__opensans'>+1 222-144-2345</p>
        <p className='p__opensans'>+1 112-123-7435</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='gericht' />
        <p className='p__opensans'>The best way to find yourself is to lose yourself for others</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 AM - 12:00 AM</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>08:00 AM - 03:00 AM</p>

      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>All Rights Reserved</p>
    </div>
  </div>
);
export default Footer;
