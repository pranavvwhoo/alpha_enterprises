export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Health.<br />Transform Your Life.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Personalized nutrition, fitness & lifestyle coaching for a healthier you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/booking" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book a Dietician
          </a>
          <a href="/booking" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book a Fitness Advisor
          </a>
        </div>
      </div>
    </section>
  )
}