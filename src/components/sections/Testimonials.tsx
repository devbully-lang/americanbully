"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { reviewsData, Review } from '@/lib/reviewsData'; // Using your main reviews data
import { Star, StarHalf, ArrowRight } from 'lucide-react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- Reusable Star Rating Component (handles half-stars) ---
const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />;
                }
                if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />;
                }
                return <Star key={i} className="w-5 h-5 text-gray-600" fill="currentColor" />;
            })}
        </div>
    );
};

// --- Platform Icons ---
const GoogleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#e53935" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.354-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1565c0" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.434 36.338 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>;
const TrustpilotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2.5l-2.5 5h-5.5l4.5 3.5-1.5 5.5 4-3.5 4 3.5-1.5-5.5 4.5-3.5h-5.5z"/></svg>;


// --- Main Testimonials Component ---
export const Testimonials = () => {
  // ✅ Sort reviews by date and get the 7 most recent
  const recentReviews = [...reviewsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 7);

  return (
    <section 
      className="py-20 text-white" 
      style={{ background: 'linear-gradient(180deg, rgb(var(--secondary)) 0%, #0a0a0a 100%)' }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Families Say</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Real stories from families who have welcomed a 601 Bully into their homes.
          </p>
        </div>

        {/* ✅ Swiper Slider Implementation */}
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-12" // Add padding-bottom for pagination bullets
        >
          {recentReviews.map((review) => (
            <SwiperSlide key={review.id} className="h-full">
                <figure
                    className="bg-white/5 border border-white/10 rounded-xl p-8 h-full flex flex-col justify-between backdrop-blur-sm"
                >
                    <blockquote className="mb-6">
                        <p className="text-lg opacity-90 italic line-clamp-5">"{review.content}"</p>
                    </blockquote>
                    <figcaption className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <Image 
                            src={review.avatar} 
                            alt={review.author} 
                            width={48} 
                            height={48} 
                            className="rounded-full border-2 border-primary/50" 
                        />
                        <div className="flex-grow">
                            <div className="font-bold text-lg text-white">{review.author}</div>
                            <StarRating rating={review.rating} />
                        </div>
                        <div className="flex-shrink-0">
                            {review.platform === 'Google' ? <GoogleIcon /> : <TrustpilotIcon />}
                        </div>
                    </figcaption>
                </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center mt-8">
            <Link 
                href="/testimonials" // <-- Make sure this path is correct!
                className="inline-flex items-center group text-white font-bold py-3 px-8 rounded-lg border-2 border-white/50 bg-white/10
                           backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-secondary shadow-lg"
            >
                Read All 75+ Reviews
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>

      </div>
    </section>
  );
};