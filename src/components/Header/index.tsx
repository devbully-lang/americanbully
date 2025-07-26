"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect
import { AnimatePresence, motion } from "framer-motion";

// --- Interfaces for Navigation Data (No changes here) ---
interface SubLink {
  title: string;
  href: string;
}

interface NavLink {
  title: string;
  href?: string;
  subLinks?: SubLink[];
}

// --- Navigation Data (No changes here) ---
const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Our Dogs",
    subLinks: [
      { title: "Our Males", href: "/males" },
      { title: "Our Females", href: "/females" },
    ],
  },
  { title: "Payment Plans", href: "/payment-plans" },
  { title: "Health Guarantee", href: "/guarantee" },
  {
    title: "More",
    subLinks: [
      { title: "Service", href: "/service" },
      { title: "Shipping", href: "/shipping" },
      { title: "Testimonials", href: "/testimonials" },
      { title: "Blog", href: "/blog" },
      { title: "Know Your Pup", href: "/know-your-pup" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--background)/0.8)] backdrop-blur-lg border-b border-black/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold" style={{ color: 'rgb(var(--primary))' }}>
            601 Bullies LLC
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.subLinks ? (
                <Dropdown key={link.title} link={link} />
              ) : (
                <Link key={link.title} href={link.href!} className="text-gray-700 hover:text-[rgb(var(--primary))] transition-colors">
                  {link.title}
                </Link>
              )
            )}
            <Link href="/puppies" className="font-bold px-5 py-2 rounded-lg transition duration-300 shadow-md" style={{ backgroundColor: 'rgb(var(--secondary))', color: 'white' }}>
              Available Puppies
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-900" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
};

const Dropdown = ({ link }: { link: NavLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-700 hover:text-[rgb(var(--primary))] flex items-center transition-colors">
        {link.title}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-md shadow-xl border border-black/10 z-10"
          >
            {link.subLinks?.map((subLink) => (
              <Link
                key={subLink.title}
                href={subLink.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:text-white transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(var(--primary))'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {subLink.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // --- FIX: Add effect to prevent background scroll when menu is open ---
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);


  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white/95 backdrop-blur-lg shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            variants={menuVariants} // Use the same variants for a consistent slide-in effect
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <span className="text-2xl font-bold" style={{ color: 'rgb(var(--primary))' }}>Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-900" aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* --- FIX: Make the navigation area scrollable --- */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-6 flex flex-col text-lg">
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <div key={link.title} className="border-b border-gray-200">
                      <button onClick={() => handleDropdownToggle(link.title)} className="w-full flex justify-between items-center py-3 font-bold">
                        <span>{link.title}</span>
                        <motion.div animate={{ rotate: openDropdown === link.title ? 180 : 0 }}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col space-y-2">
                              {link.subLinks.map((subLink) => (
                                <Link key={subLink.title} href={subLink.href} className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>
                                  {subLink.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div key={link.title} className="border-b border-gray-200">
                      <Link href={link.href!} className="block py-3" onClick={() => setIsOpen(false)}>
                        {link.title}
                      </Link>
                    </div>
                  )
                )}
                <div className="mt-6">
                  <Link href="/puppies" className="block text-white font-bold px-4 py-3 rounded-md text-center" style={{ backgroundColor: 'rgb(var(--secondary))' }} onClick={() => setIsOpen(false)}>
                    Available Puppies
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;