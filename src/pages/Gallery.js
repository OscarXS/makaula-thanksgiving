import React, { useContext, useState } from 'react';

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions'
// cursor context
import { CursorContext } from '../context/CursorContext';

import Masonry from 'react-masonry-css';
import { FiDownload, FiMaximize2 } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImg';

const images = Array.from({ length: 89 }, (_, i) => ({
  src: `/gallery/img${i + 1}.jpg`,
  category: ['People', 'Catering', 'Church', 'Slaughtering', 'Other'][i % 5],
  width: i % 2 === 0 ? 3 : 2,
  height: i % 2 === 0 ? 2 : 3,
}));

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleImages = images.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <section className='section'>
      <div className='container mx-auto min-h-full relative md:px-16 px-4'>
        {/* text & image wrapper */}
        <div className="flex flex-col min-h-full items-center justify-center gap-x-24 text-center lg:text-left pt-32 md:pt-28 lg:pt-28 ">
          {/* Masonry Grid */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="masonry-column flex flex-col gap-4"
          >
            {visibleImages.map((img, idx) => (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                key={img.src} 
                className="relative group overflow-hidden rounded-md">
                <LazyImage
                  src={img.src}
                  alt="Makaula Thanksgiving Image"
                  className="w-full rounded"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center gap-4">
                  <button
                    onClick={() => openLightbox(idx)}
                    className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
                  >
                    <FiMaximize2 />
                  </button>
                  <a
                    href={img.src}
                    download
                    className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
                  >
                    <FiDownload />
                  </a>
                </div>
              </motion.div>
            ))}
          </Masonry>

          {/* Load More Button */}
          {visibleCount < images.length && (
            <div 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-center mt-6">
              <button
                onClick={loadMore}
                className="bg-dusty text-white px-6 py-2 rounded hover:bg-dusty transition hover:-translate-y-1 duration-500"
              >
                Load More
              </button>
            </div>
          )}

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={selectedImage}
              slides={visibleImages.map((img) => ({ src: img.src }))}
            />
          )}
        </div>
      </div>
      <Footer />
    </section>
  )
};

export default Gallery;
