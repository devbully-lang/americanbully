"use client";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function GuaranteePage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Health Guarantee</motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <motion.p variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-center text-gray-700">
            At 601 Bullies LLC, the health of our puppies is our top priority. We stand behind our program and provide the following health guarantee for your peace of mind.
          </motion.p>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Veterinarian Check</h2>
            <p className="text-gray-600">Each puppy will have been examined by a licensed veterinarian and will be issued a health certificate. They will be up-to-date on all age-appropriate vaccinations and deworming treatments.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>72-Hour Guarantee</h2>
            <p className="text-gray-600">We require you to take your new puppy to a licensed veterinarian within 72 hours of purchase. If your vet finds the puppy to be in poor health, you have the option to return the puppy for a full refund.</p>
          </motion.div>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>One-Year Genetic Guarantee</h2>
            <p className="text-gray-600">We provide a one-year guarantee against any life-threatening congenital or genetic defects. A diagnosis from a licensed veterinarian is required.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
