export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Alpha Enterprises</h1>

        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-teal-600">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Enterprises, our mission is to empower individuals to achieve optimal health and wellness through personalized, evidence-based coaching. We believe that everyone deserves access to professional guidance that transforms not just their bodies, but their entire lifestyles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-teal-600">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4">
              We envision a world where preventive healthcare and lifestyle optimization are the foundation of every individual&apos;s well-being. Through our comprehensive approach, we aim to reduce the burden of chronic diseases and promote sustainable, healthy living for all.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-teal-600">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Preventive Care Focus</h3>
                <p className="text-gray-600">
                  We emphasize prevention over treatment, helping clients build healthy habits that last a lifetime.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Holistic Wellness</h3>
                <p className="text-gray-600">
                  Our programs address physical, mental, and emotional health for complete well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Personalized Solutions</h3>
                <p className="text-gray-600">
                  Every client receives customized plans tailored to their unique needs and goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Science-Based Methods</h3>
                <p className="text-gray-600">
                  Our approaches are grounded in the latest research and proven health strategies.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}