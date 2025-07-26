"use client";
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PaymentPlansPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Payment Plans</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="mt-4 text-xl opacity-90">Flexible options to bring home your new family member.</motion.p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <motion.p variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-center text-gray-700">
            We understand that adding a high-quality American Bully to your family is a significant investment. To assist with this, we offer several flexible payment options to approved homes.
          </motion.p>
          
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Deposit to Reserve Your Puppy</h2>
            <p className="text-gray-600">A non-refundable deposit is required to reserve the puppy of your choice. This deposit ensures that your selected puppy will not be offered to other buyers and is applied toward the total price of the puppy.</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Payment Schedule</h2>
            <p className="text-gray-600">After the initial deposit, the remaining balance must be paid in full before the puppy is 8 weeks of age, or prior to any scheduled shipping or pickup. We can work with you to create a weekly or bi-weekly payment schedule that fits your budget. All payments must be cleared before the puppy is released.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Accepted Payment Methods</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Zelle</li>
                <li>Bank Wire Transfer</li>
                <li>Cash (for local pickups only)</li>
            </ul>
          </motion.div>

           <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 text-center rounded-lg" style={{ backgroundColor: 'rgb(var(--accent))' }}>
            <p className="font-bold text-lg" style={{ color: 'rgb(var(--primary))' }}>
              Please contact us directly to discuss the specifics of our payment plans and to find an option that works best for you.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
