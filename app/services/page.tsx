'use client'

import { motion } from 'framer-motion'
import { Apple, Dumbbell, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const nutritionServices = [
  { title: 'Weight Loss', description: 'Metabolic optimization and bespoke nutritional plans for sustainable results.' },
  { title: 'Weight Gain', description: 'Hyper-focused hypertrophy and high-performance mass building protocols.' },
  { title: 'Healthy Habits', description: 'Behavioral re-engineering for permanent dietary mastery and energy.' },
  { title: 'Medical Nutrition', description: 'Elite nutritional oncology and metabolic pathology management.' },
]

const fitnessServices = [
  { title: 'Exercise Planning', description: 'Advanced physiological programming for strength, power, and aesthetics.' },
  { title: 'Mobility & Flow', description: 'Elite-grade movement mechanics to unlock peak functional performance.' },
  { title: 'Elite Conditioning', description: 'High-intensity metabolic conditioning protocols for extreme endurance.' },
  { title: 'Lifestyle Correction', description: 'Tactical movement strategies for modern high-performance careers.' },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 premium-gradient-text tracking-tight">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl">
            Precision engineering for your mind, body, and lifestyle.
          </p>
        </motion.div>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Apple className="w-10 h-10 text-emerald-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Nutrition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                <Link href="/booking" className="inline-flex items-center gap-2 text-emerald-400 font-semibold group/link">
                  Consult Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-12">
            <Dumbbell className="w-10 h-10 text-violet-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Elite Performance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fitnessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                <Link href="/booking" className="inline-flex items-center gap-2 text-violet-400 font-semibold group/link">
                  Consult Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}