import React from 'react';
import { Link } from 'react-router-dom';
import facebookSvg from '../assets/icon-facebook.svg';
import instagramSvg from '../assets/icon-instagram.svg';
import twitterSvg from '../assets/icon-twitter.svg';
import logo from '../assets/logo.svg';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='bg-slate-900'>
      <div className=' container mx-auto max-w-6xl py-16 text-white flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row md:justify-between'>
        <div className='ml-4'>
          <div className='flex items-center justify-center  space-x-3 md:space-x-5'>
            <img src={logo} className='w-24 ' />
            <Link to='/' className='text-serenity text-2xl md:text-3xl'>
              Serenity Home
            </Link>
          </div>
          <nav className='flex flex-col py-3 pl-4 items-center justify-between text-white font-thin space-y-8 md:flex-row md:space-x-4 md:space-y-0'>
            <div className='h-10 group'>
              <Link to='/team'>Team</Link>
              <div className='group-hover:border-b group-hover:border-blue-50'></div>
            </div>

            <div className='h-10 group'>
              <Link to='/listing'>Listing</Link>
              <div className='group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='h-10 group'>
              <Link to='/testimonial'>Testimonial</Link>
              <div className='group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='h-10 group'>
              <Link to='/about'>About</Link>
              <div className='group-hover:border-b group-hover:border-blue-50'></div>
            </div>
          </nav>
        </div>

        <div className='flex flex-col items-center justify-center mx-auto gap-8 md:mr-4'>
          <div className='flex h-8 gap-6 md:self-start'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebookSvg} alt='' className='h-6' />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={twitterSvg} alt='' className='h-6' />
            </a>

            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={instagramSvg} alt='' className='h-6' />
            </a>
          </div>

          <p className='font-thin text-gray-500'>
            &copy; {footerYear} Serenity Home. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
