'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  { 
    name: 'Aaradhya Gupta', 
    role: 'Executive',
    text: 'The personalized nutrition plan helped me lose 20 pounds and feel amazing! The support is unparalleled.', 
    rating: 5 
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Entrepreneur',
    text: 'Great fitness coaching. I&apos;ve never been in better shape and my productivity has skyrocketed.', 
    rating: 5 
  },
  { 
    name: 'Ananya Reddy', 
    role: 'Professional Athlete',
    text: 'Their holistic approach changed my lifestyle completely. I feel more energetic and focused than ever.', 
    rating: 5 
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 premium-gradient-text tracking-tight">Client Success Stories</h2>
          <p className="text-slate-400">Experience the transformation through the words of our elite members.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-violet-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 italic leading-relaxed">&quot;{testimonial.text}&quot;</p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}