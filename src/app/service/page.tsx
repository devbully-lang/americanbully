"use client";
import { motion } from "framer-motion";

// --- Icon Components ---
// We've created custom, consistent SVG icons for each service.
const PetTrainingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9V6a2 2 0 00-2-2H8a2 2 0 00-2 2v3m12 0A9 9 0 113 9m15 0a9 9 0 01-15 0m15 0H3m12 3.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>
);

const HealthGuaranteeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FoodNutritionIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 10.5a2.625 2.625 0 01-2.625 2.625H4.875A2.625 2.625 0 012.25 10.5V8.25a2.625 2.625 0 012.625-2.625h14.25a2.625 2.625 0 012.625 2.625v2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.875 13.125l.375-3.375m14.25 3.375l-.375-3.375M4.5 16.5h15" />
  </svg>
);

const OwnerTrainingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-1.31 0-2.5.6-3.25 1.5" />
  </svg>
);

const ShippingDeliveryIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const PetRecordsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5H4.875c-1.125 0-2.062.938-2.062 2.063v10.562c0 1.125.937 2.063 2.063 2.063h10.562c1.125 0 2.063-.938 2.063-2.063V16.5" />
  </svg>
);


// --- Service Data Array ---
// This holds all the content for our service cards.
const services = [
  {
    icon: <PetTrainingIcon />,
    title: "Pet Training",
    description: "Our training services focus on building a strong bond between you and your furry friend through positive reinforcement, from basic obedience to behavioral modification."
  },
  {
    icon: <HealthGuaranteeIcon />,
    title: "Health Guarantee",
    description: "All puppies come with a 1-year health guarantee. We require a vet examination within 10 days of purchase to ensure your new puppy is healthy from the start."
  },
  {
    icon: <FoodNutritionIcon />,
    title: "Food & Nutrition",
    description: "We provide high-quality, breed-specific diets to support your bullies unique needs, promoting strong muscles, healthy skin, and a shiny coat."
  },
  {
    icon: <OwnerTrainingIcon />,
    title: "Owner Training",
    description: "Our program equips you with the knowledge and skills to foster a strong bond, covering canine behavior, effective communication, and positive reinforcement."
  },
  {
    icon: <ShippingDeliveryIcon />,
    title: "Shipping & Delivery",
    description: "Our shipping and delivery services are designed for a smooth and safe transition, prioritizing your new bulldog's comfort and well-being during their journey home."
  },
  {
    icon: <PetRecordsIcon />,
    title: "Pet Records",
    description: "We maintain comprehensive records of vaccinations, medical treatments, and dietary plans, ensuring you have easy access to your pet's complete health history."
  },
];


// --- Main Page Component ---
export default function ServicePage() {
  return (
    <main style={{ backgroundColor: 'rgb(var(--background))' }}>
      {/* Hero Section */}
      <section className="py-24 text-center" style={{ backgroundColor: 'rgb(var(--secondary-light))' }}>
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold" style={{ color: 'rgb(var(--primary))' }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="mt-4 text-xl max-w-2xl mx-auto text-gray-700"
          >
            {`Our commitment extends beyond the sale. We provide lifetime support to ensure you and your new family member thrive together.`}
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center border-t-4"
                style={{ borderColor: 'rgb(var(--primary))' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 p-4 rounded-full" style={{ backgroundColor: 'rgb(var(--accent-light))', color: 'rgb(var(--primary))' }}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(var(--secondary))' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

