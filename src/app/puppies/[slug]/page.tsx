import { availablePups } from '@/lib/puppyData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This function is correct and does not need changes
export async function generateStaticParams() {
  return availablePups.map((pup) => ({
    slug: pup.slug,
  }));
}

// FIX 1: Add the 'async' keyword to the function definition
export default async function PuppyDetailPage({ params }: { 
  // FIX 2: Wrap the type in a Promise
  params: Promise<{ slug: string }> 
}) {
  // FIX 3: 'await' the params object before using it
  const { slug } = await params;
  const puppy = availablePups.find((p) => p.slug === slug);

  // If a puppy with that slug isn't found, show a 404 page
  if (!puppy) {
    notFound();
  }

  // The rest of your component code is perfect
  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery Column */}
          <div>
            <Image 
              src={puppy.image} 
              alt={puppy.name}
              width={800}
              height={800}
              className="w-full rounded-lg shadow-lg mb-4 object-cover"
            />
            <div className="grid grid-cols-3 gap-4">
              {puppy.gallery.map((img, index) => (
                <Image 
                  key={index}
                  src={img} 
                  alt={`${puppy.name} gallery image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full rounded-md shadow-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{puppy.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">${puppy.price.toLocaleString()}</p>

            <div className="space-y-4 text-lg text-gray-700">
              <DetailRow label="Gender" value={puppy.gender} />
              <DetailRow label="Breed" value={puppy.breedType} />
              <DetailRow label="Status" value={puppy.status} isAvailable={puppy.status === 'Available'} />
              <DetailRow label="Registry" value={puppy.registry} />
              <DetailRow label="Vaccinations" value={puppy.vaccinations} />
              <DetailRow label="Shipping" value={puppy.shipping} />
              <DetailRow label="Parents On Site" value={puppy.parentsOnSite} />
              <DetailRow label="Health Guarantee" value={puppy.guarantee} />
              <DetailRow label="Vet Certificate" value={puppy.vetCertificate} />
              <DetailRow label="Training" value={puppy.training} />
            </div>

            <div className="mt-8">
              <Link 
                href={`/contact?subject=Inquiry about ${puppy.name}`}
                className="w-full text-center bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-md hover:bg-green-700 transition duration-300 block"
              >
                SEND INQUIRY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper component for displaying details neatly
const DetailRow = ({ label, value, isAvailable = false }: { label: string, value: string, isAvailable?: boolean }) => (
  <div className="flex justify-between border-b border-gray-200 py-2">
    <span className="font-semibold text-gray-600">{label}:</span>
    <span className={`${isAvailable ? 'text-green-600 font-bold' : 'text-gray-800'}`}>{value}</span>
  </div>
);
