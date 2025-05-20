import React, { useContext } from 'react';
// import icons
import { ImInstagram, ImFacebook, ImPhone, ImWhatsapp } from 'react-icons/im'
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
  <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='hidden xl:flex'>
    <ul className='flex gap-x-3'>
      <li><a href='https://www.instagram.com/oscar_iamart' target='_blank' rel='noreferrer'><ImInstagram style={{ color: '#99736c' }} /></a></li>
      <li><a href='https://www.facebook.com/osebeloane' target='_blank' rel='noreferrer'><ImFacebook style={{ color: '#99736c' }} /></a></li>
      <li><a href='https://wa.me/27737065998'><ImWhatsapp style={{ color: '#99736c' }} /></a></li>
      <li><a href='tel:+27657316382'><ImPhone style={{ color: '#99736c' }} /></a></li>
    </ul>
  </div>
  )
};

export default Socials;
