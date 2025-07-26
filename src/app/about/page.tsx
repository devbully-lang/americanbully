"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            About 601 Bullies LLC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl opacity-90"
          >
            Built Strong. Raised Right.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Image 
              src="/images/about/kennel.png"
              alt="601 Bullies Kennel"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-700"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(var(--primary))' }}>Our Philosophy</h2>
            <p className="mb-4">
              We are a family-owned kennel located in the heart of the 601 area. We pride ourselves in producing some of the best American Bullies with amazing temperament, structure, and pedigree.
            </p>
            <p>
              Our goal is to raise healthy, happy, and well-socialized puppies that become loving members of your family. We are committed to the betterment of the breed and provide lifetime support for all of our puppy families.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ color: 'rgb(var(--secondary))' }}>Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="p-8 border border-black/10 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Health</h3>
                    <p className="text-gray-600">We prioritize the health and well-being of our dogs above all, ensuring all puppies are vet-checked and vaccinated.</p>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 border border-black/10 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Temperament</h3>
                    <p className="text-gray-600">Our dogs are raised in a family environment, resulting in well-socialized, confident, and loving companions.</p>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4 }}
                    className="p-8 border border-black/10 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Structure</h3>
                    <p className="text-gray-600">We adhere to the ABKC standard, focusing on producing dogs with correct confirmation and impressive structure.</p>
                </motion.div>
            </div>
        </div>
      </section>

    </main>
  );
}