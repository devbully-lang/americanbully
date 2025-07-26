import React from 'react';

export const Testimonials = () => {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Families Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/20 p-8 rounded-lg border border-white/10">
            <p className="mb-6 italic text-lg opacity-90">
              “From our first inquiry to the day we brought our puppy home, the communication from 601 Bullies was incredible. They are true professionals who clearly love their dogs.”
            </p>
            <p className="font-bold text-lg" style={{ color: 'rgb(var(--accent))' }}>
              - The Lewis Family
            </p>
          </div>
          <div className="bg-black/20 p-8 rounded-lg border border-white/10">
            <p className="mb-6 italic text-lg opacity-90">
              “Finding a trustworthy breeder is so important, and we found that with 601 Bullies. They were transparent, honest, and supportive throughout the entire process.”
            </p>
            <p className="font-bold text-lg" style={{ color: 'rgb(var(--accent))' }}>
              - Juan Carlos & Family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

