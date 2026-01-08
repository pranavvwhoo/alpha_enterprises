'use client'

const pricingPlans = [
  {
    name: 'Basic Consultation',
    price: 2500, // in rupees
    displayPrice: '₹2,500',
    duration: '1 Session',
    features: [
      'Initial health assessment',
      'Personalized diet plan',
      'Basic exercise guidance',
      'Email support for 1 week'
    ],
    popular: false
  },
  {
    name: 'Standard Package',
    price: 8000,
    displayPrice: '₹8,000',
    duration: '1 Month',
    features: [
      'Weekly consultations',
      'Customized nutrition plan',
      'Fitness program design',
      'Progress tracking',
      '24/7 chat support'
    ],
    popular: true
  },
  {
    name: 'Premium Wellness',
    price: 15000,
    displayPrice: '₹15,000',
    duration: '3 Months',
    features: [
      'Bi-weekly consultations',
      'Advanced health monitoring',
      'Holistic wellness plan',
      'Lifestyle coaching',
      'Priority support',
      'Progress reports'
    ],
    popular: false
  }
]

const products = [
  {
    name: 'Organic Protein Powder',
    price: 1200,
    displayPrice: '₹1,200',
    description: 'High-quality plant-based protein supplement'
  },
  {
    name: 'Vitamin D3 Capsules',
    price: 800,
    displayPrice: '₹800',
    description: 'Essential vitamin for bone health and immunity'
  },
  {
    name: 'Herbal Detox Tea',
    price: 600,
    displayPrice: '₹600',
    description: 'Natural detox blend for cleansing and wellness'
  }
]

function initiatePayment(amount: number, description: string) {
  const options = {
    key: 'rzp_live_S1OBgRIU2RJzSd', // Your Razorpay test key
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'Alpha Enterprises',
    description: description,
    image: '/logo.png', // Optional logo
    handler: function (response: any) {
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      // Here you would typically send the payment details to your backend
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '9999999999'
    },
    notes: {
      address: 'Corporate Office'
    },
    theme: {
      color: '#008080' // Teal color
    }
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
}

export default function Pricing() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Pricing</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-teal-600">Coaching Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${plan.popular ? 'border-2 border-teal-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-teal-600">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">{plan.displayPrice}</div>
                <p className="text-gray-600 mb-6">{plan.duration}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => initiatePayment(plan.price, `${plan.name} - ${plan.displayPrice}`)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-teal-600">Health Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-teal-600 mb-4">{product.displayPrice}</div>
                <button
                  onClick={() => initiatePayment(product.price, `${product.name} - ${product.displayPrice}`)}
                  className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}