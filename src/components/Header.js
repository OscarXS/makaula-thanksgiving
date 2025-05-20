import React, { useContext } from 'react';

// import components
import MobileNav from './MobileNav'

import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <header className='fixed w-full px-4 lg:px-[100px] z-30 h-[100px] lg:[130px] flex items-center bg-black bg-opacity-20 backdrop-blur-sm'>
      <div className='flex flex-row items-center lg:flex-row lg:items-center w-full justify-between'>
        { /* logo */ }
        <Link 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'} className='max-w-[300px]'>
          <div className='text-dusty eventName flex flex-row gap-2 items-center'><strong>Makaula</strong><span className='font-secondary text-sm bg-dusty text-black p-3 -mt-1'>PHOTOS</span></div>
        </Link>
        {/* nav - hidden on desktop */}
        <nav 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='xl:flex gap-x-12 font-semibold'>
          {/* <Link className='text-[#696c6d] hover:text-primary transition' to={'/'}>Home</Link>
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/about'}>About</Link>
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/portfolio'}>Portfolio</Link>
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/contact'}>Contact</Link> */}
        </nav>
        {/* socials */}
        {/* <Socials /> */}
        {/* mobile nav */}
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
