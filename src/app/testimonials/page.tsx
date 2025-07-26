// This is placeholder data. You will eventually fetch this from a Headless CMS.
const testimonials = [
  { 
    name: 'The Lewis Family', 
    quote: 'From our first inquiry to the day we brought our puppy home, the communication from 601 Bullies was incredible. They are true professionals who clearly love their dogs. Our boy has the best temperament and is a healthy, confident puppy. We are so grateful.' 
  },
  { 
    name: 'Juan Carlos & Family', 
    quote: 'Finding a trustworthy breeder is so important, and we found that with 601 Bullies. They were transparent, honest, and supportive throughout the entire process. Our puppy is the picture of health and has an amazing structure. Thank you for our incredible new family member!' 
  },
  { 
    name: 'Alicia H.', 
    quote: 'We were so impressed with how knowledgeable and passionate the team at 601 Bullies is. They helped us choose the perfect puppy for our family\'s lifestyle. She has a wonderful, gentle temperament and has adjusted to her new home so well. We\'d recommend them to anyone without hesitation.' 
  },
  // Add more testimonials here
];

export default function TestimonialsPage() {
  return (
    <main>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-12">What Our Families Say</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-lg">
                {/* FIX: Use template literal in curly braces to handle the quotes */}
                <p className="text-gray-600 italic mb-6">{`"${testimonial.quote}"`}</p>
                <p className="font-bold text-lg text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}