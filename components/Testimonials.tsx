const testimonials = [
  { name: 'Aaradhya Gupta', text: 'The personalized nutrition plan helped me lose 20 pounds and feel amazing!', rating: 5 },
  { name: 'Rohan Mehta', text: 'Great fitness coaching. I&apos;ve never been in better shape!', rating: 5 },
  { name: 'Ananya Reddy', text: 'Their holistic approach changed my lifestyle completely.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-teal-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}