"use client";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Terms & Conditions</motion.h1>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-xl text-gray-700">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p><strong>Last Updated: July 25, 2025</strong></p>
            <p>Please read these Terms and Conditions carefully before using the 601 Bullies LLC website. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>
          </motion.div>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Deposits and Payments</h2>
            <p>All deposits made to reserve a puppy are non-refundable. The deposit signifies a commitment to purchase and reserves the selected puppy, making it unavailable to other potential buyers. Final payment must be made in full before the puppy is released.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Health Guarantee</h2>
            {/* FIX: Wrapped string in curly braces to handle the apostrophe */}
            <p>{`Our puppies come with a health guarantee, the full details of which are available on our Health Guarantee page. It is the buyer's responsibility to read and understand the terms of this guarantee before making a purchase.`}</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Intellectual Property</h2>
            <p>The content, logos, photos, and other visual media on our website is our property and is protected by copyright laws.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

