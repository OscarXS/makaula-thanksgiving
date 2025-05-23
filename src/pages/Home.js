import React, { useContext, useEffect, useState } from 'react';
// import images
import MainImg from '../img/home/event.png'
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions'
// cursor context
import { CursorContext } from '../context/CursorContext';
// import loader
import Loader from '../components/Loader';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 seconds

  //   return () => clearTimeout(timeout);
  // }, []);

  // if (loading) return <Loader />;

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative'>
        {/* text & image wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='text-center lg:text-left w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              Makaula <br /> Family <br /> Thanksgiving
            </h1>
            {/* <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Thanksgiving</p> */}
            <Link to={'/gallery'} className='btn mb-[30px]'>view gallery</Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-36 lg:overflow-hidden'>
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={MainImg} 
                alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </motion.section>
  )
};

export default Home;
