import React from 'react';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="py-24 text-white" style={{ backgroundColor: 'rgb(var(--primary))' }}>
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Ready to Welcome a 601 Bully?
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
          Our mission is to place every puppy in a loving, responsible home. If you’re ready to add a loyal, beautiful American Bully to your family, the first step is filling out our puppy application.
        </p>
        
        <Link 
          href="/contact" 
          className="inline-block bg-black text-[rgb(var(--primary))] font-bold py-4 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-100 transition duration-300"
        >
          Start Your Application
        </Link>
        
      </div>
    </section>
  );
};
