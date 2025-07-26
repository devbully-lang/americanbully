import React from 'react';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: 'rgb(var(--primary))' }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready for a 601 Bully?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Our goal is to find loving, forever homes for each of our puppies. If you are ready to add a loyal and beautiful American Bully to your family, the first step is to fill out our puppy application.
        </p>
        <Link 
          href="/contact" 
          className="bg-white font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-200 transition duration-300 shadow-lg" 
          style={{ color: 'rgb(var(--primary))' }}
        >
          Start Your Application
        </Link>
      </div>
    </section>
  );
};
