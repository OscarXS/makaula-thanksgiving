import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

// import framer
import { motion } from 'framer-motion';
import Socials from './Socials';

// import emailjs
import emailjs from 'emailjs-com';

// import toastify
import { toast } from 'react-toastify';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        toast.success('Message sent successfully!');
        e.target.reset(); // Optional: clear the form
      },
      (error) => {
        toast.error('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );

    e.target.reset();
  };


  return (
  <nav className='text-primary' >
    {/* nav open button */}
    <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight style={{ color: 'white' }} />
    </div>
    {/* menu */}
    <motion.div 
      variants={menuVariants}
      initial='hidden'
      animate={openMenu ? 'show' : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0
     max-w-xs z-20 h-screen'>
      {/* icon */}
      <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-5 top-8 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      {/* menu list */}
      <div className='h-full flex flex-col justify-center items-center gap-y-8'>
        <div className='flex flex-col px-8'>
          <h2 className='font-primary font-bold capitalize text-4xl text-black mb-6'>Contact me</h2>
          <p className='mb-12'>If you have any requests, please feel free to contact me.</p>
          {/* form */}
          <form onSubmit={sendEmail} className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-x-10'>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757579]' type='text' placeholder='Your name' name='name' required />
              <input 
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757579]' 
                type='tel' 
                placeholder='Your phone number' 
                name='phone' required 
                pattern="^(?:\+27|0)[6-8][0-9]{8}$" 
                onInvalid={(e) => e.target.setCustomValidity('Enter a valid South African number starting with 0 or +27')}
                onInput={(e) => e.target.setCustomValidity('')}/>
            </div>
            <textarea className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757579]' type='text' placeholder='Your message' name='message' required ></textarea>
            <button className='btn mt-12 mx-auto mb-[30px] lg:mx-0'>Send</button>
          </form>
        </div>
        <Socials />
      </div>
     </motion.div>
      <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        onClick={() => setOpenMenu(false)} className='bg-black bg-opacity-50 backdrop-blur-sm w-full h-screen z-10 absolute right-0 left-0 top-0'>

        </motion.div>
  </nav>
  )
};

export default MobileNav;