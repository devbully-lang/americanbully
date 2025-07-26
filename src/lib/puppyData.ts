// This is our single source of truth for puppies for sale.
// When you add a puppy here, it will automatically show up on the
// homepage preview AND the main "Available Puppies" page.

export const availablePups = [
  { 
    name: 'Apollo',
    slug: 'apollo',
    image: '/images/puppies/apollo.jpg',
    gallery: [
      '/images/puppies/apollo-1.png',
      '/images/puppies/apollo-2.png',
      '/images/puppies/apollo-3.png',
    ],
    price: 1500,
    status: 'Available', 
    gender: 'Male',
    breedType: 'American Bully',
    registry: 'ABKC',
    hypoallergenic: 'Yes',
    vaccinations: 'Up to Date',
    shipping: 'Available',
    parentsOnSite: 'Healthy and Vaccinated',
    guarantee: '1 Year Genetic Health Guarantee',
    vetCertificate: 'Veterinary Health Exam Certificate',
    training: '100% Domesticated & Potty Trained',
    description: 'Male. Blue tri-color. Confident and playful with a champion pedigree.'
  },
  {
    name: 'Luna',
    slug: 'luna',
    image: '/images/puppies/luna.jpg',
    gallery: [
      '/images/puppies/luna-1.jpg',
      '/images/puppies/luna-2.jpg',
      '/images/puppies/luna-3.jpg',
    ],
    price: 1700,
    status: 'Available',
    gender: 'Female',
    breedType: 'French Bulldog',
    registry: 'AKC',
    hypoallergenic: 'No',
    vaccinations: 'Up to Date',
    shipping: 'Available',
    parentsOnSite: 'Champion Bloodline',
    guarantee: '1 Year Genetic Health Guarantee',
    vetCertificate: 'Veterinary Health Exam Certificate',
    training: 'Crate Trained & Socialized',
    description: 'Female. Cream-colored. Sweet temperament and great with children.'
  },
  {
    name: 'Rocky',
    slug: 'rocky',
    image: '/images/puppies/rocky.jpg',
    gallery: [
      '/images/puppies/rocky-1.jpg',
      '/images/puppies/rocky-2.jpg',
      '/images/puppies/rocky-3.jpg',
    ],
    price: 1300,
    status: 'Available',
    gender: 'Male',
    breedType: 'Golden Retriever',
    registry: 'AKC',
    hypoallergenic: 'No',
    vaccinations: 'Up to Date',
    shipping: 'Available',
    parentsOnSite: 'On Site and Well-Trained',
    guarantee: '2 Year Health Guarantee',
    vetCertificate: 'Veterinary Health Exam Certificate',
    training: 'Basic Commands & Housebroken',
    description: 'Male. Golden coat. Friendly, smart, and eager to please.'
  },
  {
    name: 'Bella',
    slug: 'bella',
    image: '/images/puppies/bella.jpg',
    gallery: [
      '/images/puppies/bella-1.jpg',
      '/images/puppies/bella-2.jpg',
      '/images/puppies/bella-3.jpg',
    ],
    price: 1600,
    status: 'Available',
    gender: 'Female',
    breedType: 'Poodle',
    registry: 'CKC',
    hypoallergenic: 'Yes',
    vaccinations: 'Up to Date',
    shipping: 'Available',
    parentsOnSite: 'Both Parents DNA Tested',
    guarantee: '1 Year Health Guarantee',
    vetCertificate: 'Veterinary Health Exam Certificate',
    training: 'Potty Trained & Leash Ready',
    description: 'Female. Apricot mini poodle. Energetic and affectionate with a soft curly coat.'
  },
];

