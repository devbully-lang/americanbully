"use client";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="py-24 text-center text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">Cookie Policy</motion.h1>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-xl text-gray-700">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p><strong>Last Updated: July 25, 2025</strong></p>
            <p>This Cookie Policy explains what cookies are and how we use them on the 601 Bullies LLC website. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.</p>
          </motion.div>
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your browser or device by websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>How We Use Cookies</h2>
            <p>Our website uses a minimal number of cookies. We may use cookies for performance and analytics purposes to help us understand how our website is being used and how we can improve the user experience. We do not use cookies for advertising or tracking purposes.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="mt-8" style={{ color: 'rgb(var(--primary))' }}>Your Choices</h2>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

