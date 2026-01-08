const nutritionServices = [
  { title: 'Weight Loss', description: 'Customized diet plans for sustainable weight loss.' },
  { title: 'Weight Gain', description: 'Nutritious plans to help you gain healthy weight.' },
  { title: 'Healthy Eating Habits', description: 'Learn to make better food choices every day.' },
  { title: 'Diabetes-Friendly Diet Plans', description: 'Specialized nutrition for blood sugar management.' },
]

const fitnessServices = [
  { title: 'Exercise Planning', description: 'Personalized workout routines for your fitness level.' },
  { title: 'Mobility & Flexibility', description: 'Improve your range of motion and reduce injury risk.' },
  { title: 'Strength & Endurance Building', description: 'Build muscle and stamina with expert guidance.' },
  { title: 'Sedentary Lifestyle Correction', description: 'Transition to an active lifestyle safely.' },
]

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-teal-600">🟢 Nutrition & Diet Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="/booking" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-teal-600">🟢 Fitness & Physical Activity Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fitnessServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="/booking" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}