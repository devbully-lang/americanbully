"use client";
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ShippingPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Shipping & Delivery</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="mt-4 text-xl opacity-90">Safe and reliable options to bring your puppy home.</motion.p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-4xl">
           <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-center text-gray-700 mb-12">
            We offer safe and reliable transportation options to deliver your puppy to you, no matter where you are located. The well-being of our puppies is our highest priority, and we take every precaution to ensure a stress-free journey.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Local Pickup</h2>
              <p className="text-gray-600">You are always welcome to pick up your new puppy in person from our kennel. We love to meet our new puppy families face-to-face. Please schedule an appointment with us in advance.</p>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Flight Nanny Services</h2>
              <p className="text-gray-600">For families located out of state, we offer a trusted flight nanny service. A professional will accompany your puppy in the cabin of the airplane and hand-deliver them to you at your nearest major airport. This is the safest way to fly a puppy. Shipping fees are not included in the puppy price.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
