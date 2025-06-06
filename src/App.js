import React, { useContext } from 'react';
// import components
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'

// import router
import { BrowserRouter as Router } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import cursor context
import { CursorContext } from './context/CursorContext';

// import toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {cursorVariants, cursorBG} = useContext(CursorContext)
  return (
  <>
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
    {/* Toastify */}
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      theme="dark"
    />
    {/* cursor */}
    <motion.div 
      variants={cursorVariants}
      animate={cursorBG}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full hidden'></motion.div>
  </>
  )
};

export default App;
