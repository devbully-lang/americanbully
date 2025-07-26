"use client";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function RefundPolicyPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Refund Policy</motion.h1>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <motion.p variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-center text-gray-700">
            Our policy regarding refunds is designed to be fair to both our clients and our kennel, ensuring the well-being of our puppies is always the foremost concern.
          </motion.p>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Deposits are Non-Refundable</h2>
            <p className="text-gray-600">All deposits placed to reserve a puppy are strictly non-refundable. A deposit signifies your serious commitment to purchase a puppy. Once a deposit is received, we remove that puppy from the market, refusing all other interested parties. This is our commitment to you, and the deposit is your commitment to us.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>Refunds Under the Health Guarantee</h2>
            <p className="text-gray-600">A refund of the purchase price (minus the deposit) may be offered only under the specific conditions outlined in our Health Guarantee. This typically involves the diagnosis of a life-threatening genetic defect within the guarantee period by a licensed veterinarian. Please refer to our official Health Guarantee page for the complete terms and requirements.</p>
          </motion.div>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-lg shadow-lg border border-black/10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--primary))' }}>No Other Refunds</h2>
            <p className="text-gray-600">We do not offer refunds for any other reasons, including but not limited to allergies, landlord issues, or changes in personal circumstances. We invest immense time, love, and resources into every puppy, and we expect the same level of commitment from our new families. We are always here to help re-home a dog if unforeseen circumstances arise.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
