import React from 'react';

//import pages
import Home from '../pages/Home'

import Gallery from '../pages/Gallery';

// import routes route and useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;
