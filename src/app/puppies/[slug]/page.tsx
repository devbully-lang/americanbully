import { availablePups } from '@/lib/puppyData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return availablePups.map((pup) => ({
    slug: pup.slug,
  }));
}

export default function PuppyDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const puppy = availablePups.find((p) => p.slug === slug);

  if (!puppy) {
    notFound();
  }

  const isSoldOrReserved = puppy.status === 'Sold' || puppy.status === 'Reserved';

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
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

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{puppy.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">${puppy.price.toLocaleString()}</p>

            <div className="space-y-4 text-lg text-gray-700">
              <DetailRow label="Gender" value={puppy.gender} />
              <DetailRow label="Breed" value={puppy.breedType} />
              {/* FIX: The status is now passed directly to the DetailRow component */}
              <DetailRow label="Status" value={puppy.status} status={puppy.status} />
              <DetailRow label="Registry" value={puppy.registry} />
              <DetailRow label="Vaccinations" value={puppy.vaccinations} />
              <DetailRow label="Shipping" value={puppy.shipping} />
              <DetailRow label="Parents On Site" value={puppy.parentsOnSite} />
              <DetailRow label="Health Guarantee" value={puppy.guarantee} />
              <DetailRow label="Vet Certificate" value={puppy.vetCertificate} />
              <DetailRow label="Training" value={puppy.training} />
            </div>

            <div className="mt-8">
              {/* FIX: Button is now smarter and changes based on status */}
              <Link 
                href={`/contact?subject=Inquiry about ${puppy.name}`}
                className={`w-full text-center text-white font-bold text-xl py-4 px-8 rounded-md transition duration-300 block ${
                  isSoldOrReserved
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                // Prevents clicking if the puppy is not available
                onClick={(e) => isSoldOrReserved && e.preventDefault()}
              >
                {isSoldOrReserved ? puppy.status.toUpperCase() : 'SEND INQUIRY'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper component for displaying details neatly (NOW WITH DYNAMIC STATUS)
const DetailRow = ({ label, value, status }: { label: string, value: string, status?: string }) => {
  let statusColor = 'text-gray-800'; // Default color
  if (status === 'Available') {
    statusColor = 'text-green-600 font-bold';
  } else if (status === 'Reserved') {
    statusColor = 'text-orange-500 font-bold';
  } else if (status === 'Sold') {
    statusColor = 'text-red-600 font-bold';
  }

  return (
    <div className="flex justify-between border-b border-gray-200 py-2">
      <span className="font-semibold text-gray-600">{label}:</span>
      {/* FIX: The class is now chosen based on the status prop */}
      <span className={status ? statusColor : 'text-gray-800'}>{value}</span>
    </div>
  );
};