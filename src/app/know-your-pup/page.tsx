"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KnowYourPupPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            Know Your Pup
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="mt-4 text-xl opacity-90"
          >
            Understanding the American Bully Breed
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 sm:p-8 rounded-lg shadow-xl border border-black/10"
          >
            <Image
              // THIS IS THE CORRECTED FILE PATH
              src="/images/know-your-pup-infographic.svg"
              alt="American Bullies Infographic"
              width={2048}
              height={2048}
              className="w-full h-auto rounded-md"
              priority
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
              We believe an educated owner is the best owner. This chart provides a wonderful overview of the American Bully breed, covering key traits, history, and care. We encourage all potential families to familiarize themselves with this information to ensure a happy and healthy life for their new companion.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
