import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 text-gray-400">Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
