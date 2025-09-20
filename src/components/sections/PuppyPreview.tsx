"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { availablePups, Pup } from '@/lib/puppyData'; // Assuming Pup type is exported from your data file

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const PuppyPreview = () => {
  // We can show more puppies in a slider, let's grab the first 6 available ones
  const pupsToShow = availablePups.filter(pup => pup.status === 'Available').slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: 'rgb(var(--secondary))' }}>
                Our Newest Arrivals
            </h2>
            <p className="mt-4 text-lg text-slate-600">
                Meet the newest members of the family, ready to find their forever homes.
            </p>
        </div>
        
        {pupsToShow.length > 0 ? (
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                className="!pb-14" // Add padding-bottom for pagination
            >
                {pupsToShow.map((pup) => (
                  <SwiperSlide key={pup.name} className="h-full">
                    <div
                      className="bg-white/60 border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 backdrop-blur-md group relative flex flex-col h-full"
                    >
                      <Link href={`/puppies/${pup.slug}`} className="block relative">
                        <Image 
                          src={pup.image}
                          alt={pup.name}
                          width={500}
                          height={500}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {pup.status === 'Available' && (
                          <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            AVAILABLE
                          </span>
                        )}
                      </Link>

                      <div className="p-6 text-center flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                          {pup.name}
                        </h3>
                        <p className="text-gray-500 mb-4 flex-grow italic">{pup.description}</p>
                        <div className="mt-auto">
                            <Link
                                href={`/puppies/${pup.slug}`}
                                className="inline-block font-semibold text-[rgb(var(--secondary))] hover:underline"
                            >
                                See More Details &rarr;
                            </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        ) : (
          <div className="text-center text-xl text-gray-600 bg-gray-100 p-12 rounded-xl shadow-sm">
            <p>No puppies currently available. Check back soon!</p>
          </div>
        )}

        <div className="text-center mt-16">
          <Link 
            href="/puppies"
            className="inline-block text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: 'rgb(var(--primary))' }}
          >
            View All Available Puppies
          </Link>
        </div>
      </div>
    </section>
  );
};