"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Manage your slideshow images here ---
const heroImages = [
  '/images/hero/baby.png',
  '/images/hero/pup.png',
  '/images/hero/adult.png',
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* Background Image Slideshow (FIXED) */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ zIndex: -1 }} // Pushes the image to the background
        >
          <Image
            src={heroImages[currentImageIndex]}
            alt={`Hero background slide ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dark Overlay has been REMOVED as requested */}
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/40"> {/* Added a subtle overlay here for text readability */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }} // Adds a shadow to make text pop
        >
          WELCOME TO 601 BULLIES LLC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-4 text-lg md:text-xl font-light max-w-2xl"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          Built Strong. Raised Right.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <Link 
            href="/puppies" 
            className="inline-block mt-8 bg-white font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-200 transition duration-300 shadow-lg"
            style={{ color: 'rgb(var(--primary))' }}
          >
            View Our Puppies
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
