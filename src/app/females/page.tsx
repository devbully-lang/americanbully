"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { dames } from '@/lib/dogData'; // Import the data for your dames

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FemalesPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl font-bold"
          >
            Our Females
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.2 } }} 
            className="mt-4 text-xl opacity-90"
          >
            The Heart of Our Kennel
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {dames.map((dame) => (
              <motion.div 
                key={dame.name} 
                variants={itemVariants}
                className="bg-white rounded-lg shadow-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={dame.image} 
                    alt={dame.name} 
                    width={800} 
                    height={800} 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>{dame.name}</h3>
                  <p className="text-lg text-gray-600">{dame.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

