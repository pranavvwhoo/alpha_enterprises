export default function CTABanner() {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
        <p className="text-xl mb-8">Join thousands who have transformed their lives with our coaching.</p>
        <a href="/booking" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Get Started Now
        </a>
      </div>
    </section>
  )
}