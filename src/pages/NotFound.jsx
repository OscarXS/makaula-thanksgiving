import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-lg text-white">Sorry, the page you're looking for doesn't exist. <a className='text-dusty border-dusty border-b-2 hover:no-underline' href='/'>Return home</a></p>
    </div>
  );
};

export default NotFound;
