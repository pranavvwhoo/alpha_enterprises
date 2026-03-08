'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#05070a]">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 text-center max-w-5xl mx-auto border-white/10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Ready to Redefine Your <span className="premium-gradient-text">Potential?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join the exclusive circle of high-performers who have mastered their wellness with Alpha Enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/booking" className="premium-button px-12 py-4 text-lg flex items-center gap-3">
              Apply to Join <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="text-white hover:text-violet-400 font-semibold transition-colors">
              Contact Us First
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}