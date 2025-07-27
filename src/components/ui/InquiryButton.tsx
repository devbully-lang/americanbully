"use client"; // This marks the component as a Client Component
import Link from 'next/link';

interface InquiryButtonProps {
  puppyName: string;
  puppyStatus: string;
}

export const InquiryButton = ({ puppyName, puppyStatus }: InquiryButtonProps) => {
  const isSoldOrReserved = puppyStatus === 'Sold' || puppyStatus === 'Reserved';

  return (
    <Link 
      href={`/contact?subject=Inquiry about ${puppyName}`}
      className={`w-full text-center text-white font-bold text-xl py-4 px-8 rounded-md transition duration-300 block ${
        isSoldOrReserved
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-600 hover:bg-green-700'
      }`}
      // Prevents clicking if the puppy is not available
      onClick={(e) => {
        if (isSoldOrReserved) {
          e.preventDefault();
        }
      }}
    >
      {isSoldOrReserved ? puppyStatus.toUpperCase() : 'SEND INQUIRY'}
    </Link>
  );
};

