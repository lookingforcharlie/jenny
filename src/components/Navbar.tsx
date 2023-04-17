import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div className=' w-full mx-auto px-8 bg-slate-700 shadow-xl'>
      <div className='relative flex items-center justify-between py-3 h-24 md:h-32'>
        {/* Logo and Company Name container */}
        <div className='flex items-center justify-center space-x-3 md:space-x-5'>
          <img src={logo} className='w-20 md:w-24' />
          <Link
            // onClick={handleClick}
            to='/'
            className='text-serenity text-2xl md:text-3xl hover:border-b hover:border-serenity'
          >
            Serenity Home
          </Link>
        </div>
        {/* nav items container */}
        <div className='hidden md:flex gap-3 text-lg text-serenity md:gap-6'>
          <Link to='/team' className='hover:border-b hover:border-serenity'>
            Team
          </Link>
          <Link to='/listing' className='hover:border-b hover:border-serenity'>
            Listing
          </Link>
          <Link
            to='/testimonial'
            className='hover:border-b hover:border-serenity'
          >
            Testimonial
          </Link>
          <Link to='/about' className='hover:border-b hover:border-serenity'>
            About
          </Link>
        </div>
        {/* hamburger icon */}
        <button
          onClick={handleClick}
          className='md:hidden border-serenity relative z-40 w-8 h-8 transition-transform duration-300 ease-in'
        >
          <span
            className={`top absolute w-7 h-1 top-0 left-0 bg-serenity 
            ${open ? 'rotate-45 translate-y-1.5 translate-x-1.5' : 'rotate-0'}
          transition-transform duration-300`}
          ></span>
          <span
            className={`middle absolute w-7 h-1 top-0 left-0 bg-serenity 
            ${open ? 'hidden' : 'rotate-0 translate-y-2.5'}
          transition-transform duration-300 `}
          ></span>
          <span
            className={`bottom absolute w-7 h-1 top-0 left-0 bg-serenity
          ${
            open
              ? '-rotate-45 translate-y-1.5 translate-x-1.5'
              : 'rotate-0 translate-y-5'
          }
          transition-transform duration-300 `}
          ></span>
        </button>
        {/* Mobile menu activated when open is true */}
        {open && (
          // z-20 put Mobile Menu above the home page background image
          // transition doesn't work here.
          <div className='absolute z-20 bg-slate-700 top-20 -left-12 -right-12 p-12 flex flex-col gap-3 text-lg text-serenity md:gap-6 transition-all duration-300 ease-in opacity-90'>
            <Link
              to='/team'
              onClick={handleClick}
              className='hover:border-b hover:border-serenity'
            >
              Team
            </Link>
            <Link
              to='/listing'
              onClick={handleClick}
              className='hover:border-b hover:border-serenity'
            >
              Listing
            </Link>
            <Link
              to='/testimonial'
              onClick={handleClick}
              className='hover:border-b hover:border-serenity'
            >
              Testimonial
            </Link>
            <Link
              to='/about'
              onClick={handleClick}
              className='hover:border-b hover:border-serenity'
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
