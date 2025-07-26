import React from 'react';

export const Features = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl mb-2" style={{ color: 'rgb(var(--secondary))' }}>Health Guarantee</h3>
          <p className="text-gray-600">Every puppy comes with a comprehensive health guarantee, is vet-checked, dewormed, and up-to-date on all vaccinations.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl mb-2" style={{ color: 'rgb(var(--secondary))' }}>Exceptional Pedigree</h3>
          <p className="text-gray-600">Our program is built on a foundation of proven, champion bloodlines, focusing on outstanding structure, health, and temperament.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl mb-2" style={{ color: 'rgb(var(--secondary))' }}>Lifetime Support</h3>
          <p className="text-gray-600">When you get a puppy from us, you become part of the 601 Bullies family. We offer lifetime breeder support for any questions you may have.</p>
        </div>
      </div>
    </section>
  );
};

