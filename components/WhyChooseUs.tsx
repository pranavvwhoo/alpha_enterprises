const reasons = [
  { title: 'Certified Coaches', description: 'Our coaches are certified professionals with years of experience.' },
  { title: 'Personalized Plans', description: 'Tailored programs designed specifically for your needs.' },
  { title: 'Science-Based Approach', description: 'Evidence-based methods for real results.' },
  { title: 'Holistic Wellness', description: 'Comprehensive care for mind, body, and spirit.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-600">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}