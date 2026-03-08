'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic Strategist',
    price: 2500,
    displayPrice: '₹2,500',
    duration: 'Single Session',
    features: [
      'Initial biophysical assessment',
      'Custom macro-nutrient protocol',
      'Foundational movement guide',
      '7-day digital concierge'
    ],
    icon: Zap,
    color: 'from-blue-500/20 to-cyan-500/20',
    popular: false
  },
  {
    name: 'Elite Transformation',
    price: 8000,
    displayPrice: '₹8,000',
    duration: '30-Day Intensive',
    features: [
      'Weekly architectural audits',
      'Precision nutrition engineering',
      'Performance programming',
      'Real-time data monitoring',
      '24/7 priority encrypted chat'
    ],
    icon: Star,
    color: 'from-violet-500/20 to-purple-500/20',
    popular: true
  },
  {
    name: 'Mastery Protocol',
    price: 15000,
    displayPrice: '₹15,000',
    duration: '90-Day Mastery',
    features: [
      'Bi-weekly deep-dive sessions',
      'Advanced metabolic tracking',
      'Holistic longevity roadmap',
      'Executive lifestyle design',
      'Ultra-priority status',
      'Quarterly performance reports'
    ],
    icon: Crown,
    color: 'from-emerald-500/20 to-teal-500/20',
    popular: false
  }
]

function handlePayment(amount: number, description: string) {
  if (typeof window !== 'undefined' && (window as any).Razorpay) {
    const options = {
      key: 'rzp_live_S1OBgRIU2RJzSd',
      amount: amount * 100,
      currency: 'INR',
      name: 'Alpha Enterprises',
      description: description,
      handler: function (response: any) {
        alert('Payment Complete! Reference ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Elite Client',
        email: 'client@alpha-enterprises.com',
      },
      theme: {
        color: '#8b5cf6'
      }
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 premium-gradient-text tracking-tight">Investment Plans</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Choose the architecture that best fits your transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-full group ${plan.popular ? 'md:scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-1 rounded-full text-xs font-black tracking-widest uppercase z-20 shadow-lg shadow-violet-500/20">
                  Most Preferred
                </div>
              )}
              
              <div className={`h-full glass-card p-10 flex flex-col items-center text-center overflow-hidden relative border-white/10 ${plan.popular ? 'ring-2 ring-violet-500/50' : ''}`}>
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${plan.color}`}></div>
                
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                  <plan.icon className="w-10 h-10 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.displayPrice}</span>
                  <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-bold">{plan.duration}</p>
                </div>

                <ul className="space-y-4 mb-10 text-left w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-400 text-sm gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePayment(plan.price, plan.name)}
                  className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular 
                    ? 'premium-button shadow-lg shadow-violet-500/20' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Secure Access
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}