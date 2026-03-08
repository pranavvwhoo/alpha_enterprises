'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Target, Microchip, HeartPulse } from 'lucide-react'

const reasons = [
  { 
    title: 'Certified Mastery', 
    description: 'Our coaches hold elite international certifications and decades of collective experience.',
    icon: ShieldCheck,
    color: 'text-violet-400'
  },
  { 
    title: 'Bespoke Blueprint', 
    description: 'We don&apos;t do templates. Every plan is a hand-crafted strategy for your specific biology.',
    icon: Target,
    color: 'text-emerald-400'
  },
  { 
    title: 'Precision Science', 
    description: 'Evidence-based methodologies merged with the latest in performance coaching tech.',
    icon: Microchip,
    color: 'text-blue-400'
  },
  { 
    title: 'Total Vitality', 
    description: 'A comprehensive approach that masters the synergy of mind, body, and spirit.',
    icon: HeartPulse,
    color: 'text-rose-400'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 premium-gradient-text tracking-tight">The Alpha Distinction</h2>
          <p className="text-slate-400 text-lg">Why industry leaders and high-performers trust us with their health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 transition-transform ${reason.color}`}>
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}