"use client";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Privacy Policy</motion.h1>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-xl text-gray-700">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p><strong>Last Updated: July 25, 2025</strong></p>
            {/* FIX: Wrapped the string in curly braces to handle the double quotes */}
            <p>{`601 Bullies LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.`}</p>
          </motion.div>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Collection of Your Information</h2>
            <p>We may collect personal information from you, such as your name, email address, phone number, and mailing address, when you fill out our contact form or otherwise communicate with us. This information is used solely for the purpose of responding to your inquiries and facilitating the puppy adoption process.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Use of Your Information</h2>
            <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              <ul className="list-disc list-inside mt-2">
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Process transactions and manage your application.</li>
                <li>Send you updates about our available puppies and upcoming litters if you opt-in.</li>
              </ul>
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}