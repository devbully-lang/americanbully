"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// This is the actual form component that needs client-side hooks
function ContactForm() {
  const searchParams = useSearchParams();
  const puppySubject = searchParams.get('subject');

  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (puppySubject) {
      setSubject(puppySubject);
    }
  }, [puppySubject]);
  
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'rgb(var(--background))' }}>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: 'rgb(var(--primary))' }}>Contact Us</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600">
            {`We'd love to hear from you. Please fill out the form below to get in touch.`}
          </p>
        </motion.div>
        
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Form Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg border border-black/10"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--secondary))' }}>Send a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <motion.div variants={formItemVariants}><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="tel" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="cityState" className="block text-sm font-medium text-gray-700 mb-1">City / State</label><input type="text" id="cityState" name="cityState" required value={cityState} onChange={(e) => setCityState(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea id="message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us a little about yourself and the home you can provide..." className="form-input"></textarea></motion.div>
              <div className="text-center pt-4">
                <motion.button type="submit" className="text-white font-bold py-3 px-8 rounded-lg transition shadow-lg" style={{ backgroundColor: 'rgb(var(--primary))' }} whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} whileTap={{ scale: 0.95 }}>
                  Send Inquiry
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border border-black/10">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(var(--secondary))' }}>Our Location</h3>
                <p className="text-gray-600">Jackson, MS (Example)<br/>*Visits by appointment only*</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-black/10">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(var(--secondary))' }}>Contact Details</h3>
                <p className="text-gray-600"><strong>Email:</strong> contact@601bullies.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> (601) 555-0101</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// This is the main page component that wraps our form in Suspense
export default function ContactPage() {
  return (
    // The fallback will be shown while the client component loads
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}