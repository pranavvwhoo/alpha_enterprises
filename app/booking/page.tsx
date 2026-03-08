'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, ArrowRight } from 'lucide-react'
import BookingModal from '../../components/BookingModal'

export default function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-4 h-4" /> Begin Your Ascent
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 premium-gradient-text tracking-tighter">
            Architect Your <br /> Transformation
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Direct access to our world-class master coaches. 
            Select your architect and start your journey today.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="premium-button group flex items-center gap-3 px-10 py-5 text-lg"
            >
              <Calendar className="w-6 h-6" />
              <span>Initiate Protocol</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Limited Availability Slots
            </p>
          </div>
        </motion.div>

        {/* Decorative Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-50">
          {[
            { label: 'Step 1', text: 'Select Specialist' },
            { label: 'Step 2', text: 'Define Scope' },
            { label: 'Step 3', text: 'Execute Plan' }
          ].map((step, i) => (
            <div key={i} className="glass-card p-6 border-white/5 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-2 block">{step.label}</span>
              <p className="text-white font-bold">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <BookingModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}