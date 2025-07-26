"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const DiscoverSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--primary))' }}>Discover 601 Bullies</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Thank you for your interest in our exceptional American Bullies! We currently have adorable puppies and young adults of outstanding quality, ready to join approved, loving families.
              </p>
              <p>
                Our American Bullies are healthy, well-socialized, and bred for exceptional temperament, ensuring they become the perfect companions. With over 9 years of dedicated, selective breeding, we strive for continuous improvement with each generation.
              </p>
              <p>
                When inquiring about the cost, please note that each puppy is individually priced based on their pedigree, structure, and show potential. This reflects the time, effort, love, and significant investment we’ve dedicated to producing top-quality American Bullies. Owning a well-bred, healthy puppy is an investment in a lifelong companion.
              </p>
              <p className="font-semibold" style={{ color: 'rgb(var(--secondary))' }}>
                Due to high demand, we kindly ask for serious inquiries only.
              </p>
            </div>
             <Link 
              href="/contact" 
              className="inline-block mt-8 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md" 
              style={{ backgroundColor: 'rgb(var(--primary))' }}
            >
              Inquire Now
            </Link>
          </motion.div>
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[300px] md:min-h-0"
          >
            <Image
              src="/images/discover-dog.jpg" // Add a nice picture of one of your dogs here
              alt="601 Bullies American Bully"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

