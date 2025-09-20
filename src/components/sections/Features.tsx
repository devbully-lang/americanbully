import React from 'react';

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[rgb(var(--background))] via-white to-[rgb(var(--background))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight" style={{ color: 'rgb(var(--secondary))' }}>
          Why Choose 601 Bullies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Health Guarantee',
              desc: 'Every puppy comes with a comprehensive health guarantee, is vet-checked, dewormed, and up-to-date on all vaccinations.',
            },
            {
              title: 'Exceptional Pedigree',
              desc: 'Our program is built on a foundation of proven, champion bloodlines, focusing on outstanding structure, health, and temperament.',
            },
            {
              title: 'Lifetime Support',
              desc: 'When you get a puppy from us, you become part of the 601 Bullies family. We offer lifetime breeder support for any questions you may have.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: 'rgb(var(--secondary))' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
