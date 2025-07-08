import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='border-t backdrop-blur-2xl py-6 supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mb-4'>
          {/* About Section */}
          <div className='hidden md:block text-center md:text-left'>
            <h3 className='text-lg font-semibold mb-0'>Weather App</h3>
            <p className='text-sm text-muted-foreground mb-4'>
              Get real-time weather updates for your favorite cities. Stay informed with accurate forecasts and weather conditions.
            </p>
            <div className='flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground'>
              <FaMapMarkerAlt className='h-4 w-4' />
              <span>Made in Barwala 💪🏼</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-0'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li><a href='/' className='hover:text-foreground transition-colors'>Home</a></li>
              <li><a href='/about' className='hover:text-foreground transition-colors'>About</a></li>
              <li><a href='/privacy-policy' className='hover:text-foreground transition-colors'>Privacy Policy</a></li>
              <li><a href='/terms-of-service' className='hover:text-foreground transition-colors'>Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className='text-center md:text-right'>
            <h3 className='text-lg font-semibold mb-4'>Connect With Me</h3>
            <div className='flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground mb-4'>
              <FaEnvelope className='h-4 w-4' />
              <span>parveshbansal063@gmail.com</span>
            </div>
            <div className='flex justify-center md:justify-end gap-4'>
              <a 
                href='https://github.com/parve5h' 
                aria-label='GitHub' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <FaGithub size={20} />
              </a>
              <a 
                href='https://linkedin.com/in/parvesh-bansal' 
                aria-label='LinkedIn' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href='https://instagram.com/parve5h' 
                aria-label='Instagram' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href='https://twitter.com/parve5h' 
                aria-label='Twitter' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className='border-t pt-4 text-center text-sm text-muted-foreground'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-2 '>
            <p>&copy; {new Date().getFullYear()} Parvesh Bansal. All rights reserved.</p>
            <p>Made with ❤️ using React & OpenWeatherMap API</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
