// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
    </div>
  ); 
};

export default Loader;
