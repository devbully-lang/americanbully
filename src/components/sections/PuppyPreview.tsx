// src/components/sections/PuppyPreview.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { availablePups } from '@/lib/puppyData';

export const PuppyPreview = () => {
  const pupsToShow = availablePups.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f9f9f9] to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14 tracking-tight" style={{ color: 'rgb(var(--secondary))' }}>
          Our Newest Arrivals
        </h2>
        
        {pupsToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pupsToShow.map((pup) => (
              <div
                key={pup.name}
                className="bg-white/80 border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 backdrop-blur-md group relative"
              >
                <Link href={`/puppies/${pup.slug}`} className="block relative">
                  <Image 
                    src={pup.image}
                    alt={pup.name}
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {pup.status === 'Available' && (
                    <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      AVAILABLE
                    </span>
                  )}
                </Link>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                    {pup.name}
                  </h3>
                  <p className="text-gray-500 mb-4 min-h-[64px] italic">{pup.description}</p>
                  <Link
                    href={`/puppies/${pup.slug}`}
                    className="inline-block font-semibold text-[rgb(var(--secondary))] hover:underline"
                  >
                    See More Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-600 bg-gray-100 p-12 rounded-xl shadow-sm">
            <p>No puppies currently available. Check back soon!</p>
          </div>
        )}

        <div className="text-center mt-16">
          <Link 
            href="/puppies"
            className="inline-block text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'rgb(var(--primary))' }}
          >
            View All Available Puppies
          </Link>
        </div>
      </div>
    </section>
  );
};
