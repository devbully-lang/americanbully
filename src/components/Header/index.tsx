"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// --- Interfaces for Navigation Data ---
interface SubLink {
  title: string;
  href: string;
}

interface NavLink {
  title: string;
  href?: string;
  subLinks?: SubLink[];
}

// --- Navigation Data ---
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
  { title: "Reviews", href: "/testimonials" },
  {
    title: "More",
    subLinks: [
      { title: "Payment Plans", href: "/payment-plans" },
      { title: "Health Guarantee", href: "/guarantee" },
      { title: "Shipping", href: "/shipping" },
      { title: "Blog", href: "/blog" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

// --- Top Announcement Bar Component ---
const AnnouncementBar = () => (
  <div className="bg-gray-900 text-white py-2 text-center text-sm font-medium">
    <div className="container mx-auto px-6">
      <Link href="/testimonials" className="inline-flex items-center group">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
        </div>
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="underline decoration-1 underline-offset-2 group-hover:text-yellow-300 transition-colors">
          Read Our 5-Star Reviews
        </span>
      </Link>
    </div>
  </div>
);

// --- Desktop Dropdown Component ---
const Dropdown = ({ link }: { link: NavLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-800 hover:bg-white/20 rounded-full px-4 py-1.5 transition-all duration-300 font-medium text-sm flex items-center">
        {link.title}
        <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-4 w-56 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-black/5 z-10 overflow-hidden"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 border-t border-l border-black/5 rotate-45" />
            <div className="py-2">
              {link.subLinks?.map((subLink) => (
                <Link
                  key={subLink.title}
                  href={subLink.href}
                  className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
                >
                  {subLink.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Mobile Menu Component ---
const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
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
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            variants={panelVariants}
          >
            <div className="flex justify-between items-center p-5 border-b">
              <span className="text-xl font-bold" style={{ color: "rgb(var(--primary))" }}>Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-900" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="p-4 flex flex-col text-lg">
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <div key={link.title} className="border-b">
                      <button
                        onClick={() => handleDropdownToggle(link.title)}
                        className="w-full flex justify-between items-center py-4 font-medium"
                      >
                        <span>{link.title}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${openDropdown === link.title ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.title}
                                  href={subLink.href}
                                  className="block py-3 text-base text-gray-600 hover:text-[rgb(var(--primary))] transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subLink.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div key={link.title} className="border-b">
                      <Link
                        href={link.href!}
                        className="block py-4 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </div>
                  )
                )}
                <div className="mt-8">
                  <Link
                    href="/puppies"
                    className="block text-white font-bold px-4 py-4 rounded-lg text-center shadow-lg"
                    style={{ backgroundColor: "rgb(var(--secondary))" }}
                    onClick={() => setIsOpen(false)}
                  >
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

// --- Main Header Component ---
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-based header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-[rgb(var(--background)/0.8)] backdrop-blur-lg border-b border-black/10 shadow-md"
              : "bg-transparent"
          }`}
        >
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold" style={{ color: "rgb(var(--primary))" }}>
              601 Bullies LLC
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm px-3 py-1.5">
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <Dropdown key={link.title} link={link} />
                  ) : (
                    <Link
                      key={link.title}
                      href={link.href!}
                      className="text-gray-800 hover:bg-white/20 rounded-full px-4 py-1.5 transition-all duration-300 font-medium text-sm"
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </div>
              
              <Link
                href="/puppies"
                className="group relative inline-flex items-center overflow-hidden rounded-lg px-6 py-2.5 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "rgb(var(--secondary))" }}
              >
                <span>Available Puppies</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-900" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </header>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
};

export default Header;