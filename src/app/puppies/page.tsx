import Image from 'next/image';
import Link from 'next/link';
import { availablePups } from '@/lib/puppyData'; // Import the puppy data

export default function PuppiesPage() {
  return (
    <main>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">Available Puppies</h1>
          
          {availablePups.length === 0 ? (
            <div className="text-center text-xl text-gray-600 mt-12">
              <p>We do not have any puppies available at this time.</p>
              <p className="mt-2">Please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> to inquire about upcoming litters!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {availablePups.map((pup) => (
                <div key={pup.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Link now wraps the image and goes to the detail page */}
                  <Link href={`/puppies/${pup.slug}`}>
                    <div className="relative">
                      <Image src={pup.image} alt={pup.name} width={500} height={500} className="w-full h-80 object-cover" />
                      {pup.status === 'Available' && (
                         <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                           AVAILABLE
                         </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{pup.name}</h3>
                    <p className="text-xl font-semibold text-blue-600 mb-2">${pup.price.toLocaleString()}</p>
                    <p className="text-gray-600 mb-4">{pup.description}</p>
                    {/* Link now goes to the detail page */}
                    <Link href={`/puppies/${pup.slug}`} className="font-bold text-blue-600 hover:text-blue-800">
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

