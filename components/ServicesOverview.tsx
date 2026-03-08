'use client'

import { motion } from 'framer-motion'
import { Apple, Dumbbell, RefreshCw, Activity } from 'lucide-react'

const services = [
  { 
    title: 'Nutrition & Diet Coaching', 
    description: 'Bespoke meal planning and nutritional optimization for peak performance.',
    icon: Apple,
    color: 'text-emerald-400'
  },
  { 
    title: 'Fitness & Physical Activity', 
    description: 'Scientific exercise programming tailored to your unique physiology.',
    icon: Dumbbell,
    color: 'text-violet-400'
  },
  { 
    title: 'Lifestyle Correction', 
    description: 'Strategic daily habits optimization for sustained energy and focus.',
    icon: RefreshCw,
    color: 'text-blue-400'
  },
  { 
    title: 'Medical Nutrition', 
    description: 'Specialized dietary management for diabetes and metabolic health.',
    icon: Activity,
    color: 'text-rose-400'
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 premium-gradient-text">Core Wellness Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Expertise meeting excellence. We provide the foundation for your holistic transformation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 group"
            >
              <div className={`mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}