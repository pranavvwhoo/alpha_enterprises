const coaches = [
  {
    name: 'Dr. Aarav Sharma',
    specialization: 'Nutrition & Dietetics',
    experience: '8 years',
    rating: 4.9,
    qualifications: 'PhD in Nutrition, Certified Dietitian'
  },
  {
    name: 'Rajesh Kumar',
    specialization: 'Fitness & Strength Training',
    experience: '10 years',
    rating: 4.8,
    qualifications: 'Certified Personal Trainer, MSc in Exercise Science'
  },
  {
    name: 'Priya Patel',
    specialization: 'Lifestyle Coaching',
    experience: '6 years',
    rating: 4.9,
    qualifications: 'Certified Life Coach, BSc in Psychology'
  },
  {
    name: 'Dr. Vikram Singh',
    specialization: 'Sports Medicine',
    experience: '12 years',
    rating: 4.7,
    qualifications: 'MD, Board Certified in Sports Medicine'
  },
]

export default function Coaches() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Coaches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-gray-600">👤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{coach.name}</h3>
              <p className="text-teal-600 font-medium mb-2 text-center">{coach.specialization}</p>
              <p className="text-sm text-gray-600 mb-2">Experience: {coach.experience}</p>
              <p className="text-sm text-gray-600 mb-4">Qualifications: {coach.qualifications}</p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-gray-600">{coach.rating}</span>
              </div>
              <a href="/booking" className="block text-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Book Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}