import React from 'react';
import { Quote, Star } from 'lucide-react';

// --- Reusable Star Rating Component (No changes needed here) ---
const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const starArray = Array.from({ length: totalStars });

  return (
    <div className="flex items-center">
      {starArray.map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < fullStars ? 'text-yellow-400' : 'text-gray-600'
          }`}
          fill={index < fullStars ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

// --- Testimonial Data (No changes needed here) ---
const testimonialsData = [
  {
    name: 'The Lewis Family',
    quote:
      'From our first inquiry to the day we brought our puppy home, the communication was incredible. They are true professionals who clearly love their dogs.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=The Lewis Family',
  },
  {
    name: 'Juan Carlos & Family',
    quote:
      'Finding a trustworthy breeder is so important, and we found that with 601 Bullies. Transparent, honest, and supportive throughout the entire process.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Juan Carlos',
  },
  {
    name: 'Samantha P.',
    quote:
      'Our American Bully is the most well-tempered and beautiful dog we have ever owned. The quality and care they put into their program is evident. Highly recommend!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Samantha P',
  },
];

// --- Main Testimonials Component (With final adjustment) ---
export const Testimonials = () => {
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

          <div className="mt-8 inline-flex flex-col items-center gap-2 bg-black/20 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#e53935" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.354-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1565c0" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.434 36.338 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                  <span className="font-semibold text-xl">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">5.0</span>
                  <StarRating rating={5} />
                  <span className="text-sm opacity-70">Based on 25+ reviews</span>
              </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <figure
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-between
                         backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
            >
              <header className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-accent/50" />
                  <div>
                    <figcaption className="font-bold text-lg text-white">
                      {testimonial.name}
                    </figcaption>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#e53935" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.354-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1565c0" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.434 36.338 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
              </header>
              <blockquote className="relative text-lg opacity-90 italic">
                {/* ✅ UPDATED to be smaller and not overlap text */}
                
                <p>{testimonial.quote}</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
