import Link from "next/link";
import Image from "next/image";

// FIX: Create a dedicated, self-contained FacebookIcon component.
// This uses an SVG for a clear image and the official Facebook blue for the background.
const FacebookIcon = () => (
  <a 
    href="https://www.facebook.com/share/1EnmybhPob/?mibextid=wwXIfr" // Replace with your actual Facebook page URL
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Follow us on Facebook"
    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-blue-800"
    style={{ backgroundColor: '#1877F2' }} // Official Facebook Blue
  >
    <svg 
      className="w-5 h-5" 
      fill="white" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  </a>
);


const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(var(--secondary))' }}>
      <div className="container mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo-light.png" alt="601 Bullies LLC Logo" width={60} height={60} />
              <span className="text-2xl font-bold" style={{ color: 'rgb(var(--accent))' }}>601 Bullies LLC</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            {/* FIX: Use the new FacebookIcon component. This resolves the error. */}
            <FacebookIcon />
            {/* You can add more social icons here following the same pattern */}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--accent))' }}>Our Program</h3>
            <ul className="space-y-2">
              <li><Link href="/males" className="opacity-80 hover:opacity-100 transition-opacity">Our Males</Link></li>
              <li><Link href="/females" className="opacity-80 hover:opacity-100 transition-opacity">Our Females</Link></li>
              <li><Link href="/puppies" className="opacity-80 hover:opacity-100 transition-opacity">Available Puppies</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--accent))' }}>Information</h3>
            <ul className="space-y-2">
              <li><Link href="/guarantee" className="opacity-80 hover:opacity-100 transition-opacity">Health Guarantee</Link></li>
              <li><Link href="/payment-plans" className="opacity-80 hover:opacity-100 transition-opacity">Payment Plans</Link></li>
              <li><Link href="/shipping" className="opacity-80 hover:opacity-100 transition-opacity">Shipping</Link></li>
              <li><Link href="/service" className="opacity-80 hover:opacity-100 transition-opacity">Service</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--accent))' }}>About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/testimonials" className="opacity-80 hover:opacity-100 transition-opacity">Testimonials</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--accent))' }}>Contact</h3>
            <p className="opacity-80">USA</p>
            <p className="opacity-80">Email: contact@601bullies.com</p>

          </div>
        </div>
      </div>

      <div className="py-6 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm opacity-60 mb-4 md:mb-0">&copy; {new Date().getFullYear()} 601 Bullies LLC. All Rights Reserved.</p>
            <div className="flex space-x-6 text-sm">
                <Link href="/terms-conditions" className="opacity-60 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
                <Link href="/privacy-policy" className="opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
                <Link href="/refund-policy" className="opacity-60 hover:opacity-100 transition-opacity">Refund Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
