import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { availablePups } from '@/lib/puppyData';

export const PuppyPreview = () => {
  const pupsToShow = availablePups.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'rgb(var(--secondary))' }}>
          Our Newest Pups
        </h2>
        
        {pupsToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pupsToShow.map((pup) => (
              <div key={pup.name} className="bg-white rounded-lg shadow-lg overflow-hidden group border border-black/10">
                <Link href={`/puppies/${pup.slug}`}>
                  <div className="relative">
                    <Image 
                      src={pup.image} 
                      alt={pup.name} 
                      width={500} 
                      height={500} 
                      className="w-full h-72 object-cover" 
                    />
                    {pup.status === 'Available' && (
                      <div className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: 'rgb(var(--primary))' }}>
                        AVAILABLE
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>{pup.name}</h3>
                  <p className="text-gray-600 mb-4 h-16">{pup.description}</p>
                  <Link href={`/puppies/${pup.slug}`} className="font-bold transition-colors" style={{ color: 'rgb(var(--secondary))' }}>
                    See More Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-600 bg-gray-50 p-12 rounded-lg">
            <p>No puppies currently available. Check back soon!</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            href="/puppies" 
            className="text-white font-bold py-3 px-8 rounded-lg transition duration-300" 
            style={{ backgroundColor: 'rgb(var(--primary))' }}
          >
            View All Available Puppies
          </Link>
        </div>
      </div>
    </section>
  );
};
