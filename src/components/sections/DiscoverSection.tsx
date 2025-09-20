"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const DiscoverSection = () => {
  return (
    <section className="py-24 bg-[rgb(var(--background))]">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-[rgb(var(--primary))]">
              Discover 601 Bullies
            </h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Thank you for your interest in our exceptional American Bullies! We currently have adorable puppies and young adults of outstanding quality, ready to join approved, loving families.
              </p>
              <p>
                Our American Bullies are healthy, well-socialized, and bred for exceptional temperament, ensuring they become the perfect companions. With over 9 years of dedicated, selective breeding, we strive for continuous improvement with each generation.
              </p>
              <p>
                When inquiring about the cost, please note that each puppy is individually priced based on their pedigree, structure, and show potential. This reflects the time, effort, love, and significant investment we’ve dedicated to producing top-quality American Bullies.
              </p>
              <p className="font-semibold text-[rgb(var(--secondary))]">
                Due to high demand, we kindly ask for serious inquiries only.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-block mt-8 font-bold text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              style={{ backgroundColor: 'rgb(var(--primary))' }}
            >
              Inquire Now
            </Link>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[300px] md:min-h-full"
          >
            <Image
              src="/images/discover-dog.jpg"
              alt="601 Bullies American Bully"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
