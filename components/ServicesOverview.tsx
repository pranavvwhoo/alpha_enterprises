const services = [
  { title: 'Nutrition & Diet Coaching', description: 'Personalized meal plans and dietary guidance.' },
  { title: 'Fitness & Physical Activity Coaching', description: 'Custom exercise routines and fitness training.' },
  { title: 'Lifestyle Correction', description: 'Holistic approach to healthy living habits.' },
  { title: 'Diabetes-Friendly Diets', description: 'Specialized nutrition for diabetes management.' },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}