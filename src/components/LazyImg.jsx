import React, { useState } from 'react';

const LazyImage = ({ src, alt, aspectRatio }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gray-200 ${
        !loaded ? 'animate-pulse' : ''
      }`}
      style={{ aspectRatio }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300"></div> // Skeleton
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default LazyImage;
