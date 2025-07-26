"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const KnowYourPupSection = () => {
  return (
    // This section will be added to the homepage
    <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold" style={{ color: 'rgb(var(--primary))' }}>
            Discover the American Bully
          </h2>
          <p className="text-lg text-gray-600 mt-2">An educated owner is the best owner.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-4 sm:p-8 rounded-lg shadow-xl border border-black/10"
        >
          <Image
            src="/images/know-your-pup-infographic.svg"
            alt="American Bullies Infographic"
            width={2048}
            height={2048}
            className="w-full h-auto rounded-md"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0 }}
          className="mt-12 text-center text-lg text-gray-700 prose lg:prose-xl max-w-4xl mx-auto"
        >
          <p>
            This chart provides a wonderful overview of the American Bully breed, covering key traits, history, and care. We encourage all potential families to familiarize themselves with this information to ensure a happy and healthy life for their new companion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowYourPupSection;

