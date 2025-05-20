import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import Socials from './Socials';

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="bg-black-100 text-white px-[30px] lg:px-[100px] py-10 mt-20 bottom-0"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 md:hidden lg:hidden">
        {/* Socials */}
        <Socials />
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Xolile Makaula. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
