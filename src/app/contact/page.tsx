"use client";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from 'next/navigation';

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// --- SUCCESS MODAL COMPONENT ---
const SuccessModal = ({ message, onClose }: { message: string, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--primary))' }}>Message Sent!</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      <button
        onClick={onClose}
        className="text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        style={{ backgroundColor: 'rgb(var(--secondary))' }}
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

// --- THE MAIN FORM COMPONENT ---
function ContactForm() {
  const searchParams = useSearchParams();
  const puppySubject = searchParams.get('subject');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (puppySubject) {
      setSubject(puppySubject);
    }
  }, [puppySubject]);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, cityState, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage('Thank you for your message! We will get back to you as soon as possible.');
        setName(''); setEmail(''); setPhone(''); setCityState(''); setSubject(''); setMessage('');
      } else {
        setStatus('error');
        setResponseMessage(data.error || 'An unexpected error occurred.');
      }
    // THIS IS THE DEFINITIVE FIX:
    // This comment tells the build process to ignore the "unused variable" error on the next line.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) { 
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'rgb(var(--background))' }}>
      <AnimatePresence>
        {status === 'success' && (
          <SuccessModal 
            message={responseMessage} 
            onClose={() => setStatus('idle')} 
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: 'rgb(var(--primary))' }}>Contact Us</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600">
            We would love to hear from you. Please fill out the form below to get in touch.
          </p>
        </motion.div>
        
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg border border-black/10"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--secondary))' }}>Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formItemVariants}><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="tel" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="cityState" className="block text-sm font-medium text-gray-700 mb-1">City / State</label><input type="text" id="cityState" name="cityState" required value={cityState} onChange={(e) => setCityState(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="form-input" /></motion.div>
              <motion.div variants={formItemVariants}><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea id="message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us a little about yourself and the home you can provide..." className="form-input"></textarea></motion.div>
              
              <div className="text-center pt-4">
                <motion.button type="submit" disabled={status === 'sending'} className="text-white font-bold py-3 px-8 rounded-lg transition shadow-lg disabled:opacity-50" style={{ backgroundColor: 'rgb(var(--primary))' }} whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} whileTap={{ scale: 0.95 }}>
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </motion.button>
              </div>

              {status === 'error' && <p className="text-center text-red-600 mt-4">{responseMessage}</p>}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}