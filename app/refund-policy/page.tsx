'use client'

import { motion } from 'framer-motion'
import { RefreshCcw, Calendar, Package, AlertCircle, Mail, Phone } from 'lucide-react'

export default function RefundPolicy() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
            <RefreshCcw className="w-4 h-4" /> Capital Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 premium-gradient-text tracking-tight">Refund Policy</h1>
          <p className="text-slate-500 text-sm italic font-medium">Last updated: March 8, 2026</p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-emerald-400" />
              Consultation Protocols
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Full credit for cancellations verified 24h prior to engagement.',
                'Immediate forfeiture for no-shows or late-stage cancellations.',
                'Premium processing within 5-7 elite business days.',
                'Automatic reconciliation to original acquisition source.'
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Package className="w-6 h-6 text-violet-400" />
              Package Architectures
            </h2>
            <ul className="space-y-4">
              {[
                'Pro-rated reconciliation for unutilized sessions in multi-stage packages.',
                'Reconciliation requests must be registered within 30 days of acquisition.',
                'Bespoke architectures are non-refundable once performance has initiated.',
                'Standard 10% administrative allocation applies to all processed returns.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-rose-500/20 bg-rose-500/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-rose-400" />
              Asset Exceptions
            </h2>
            <p className="text-slate-400 mb-6 font-medium">Returns are fundamentally restricted for:</p>
            <div className="flex flex-wrap gap-3">
              {[
                'Fully rendered coaching sessions',
                'Accessed digital performance assets',
                'Promotional event acquisitions',
                'Customized dietary frameworks'
              ].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-slate-300 text-xs font-bold tracking-tight">
                  {tag}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10 bg-white/5 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Concierge Support</h2>
            <p className="text-slate-400 mb-8">For all reconciliation inquiries and capital protection requests:</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
              <a href="mailto:singhroshan2110@gmail.com" className="flex items-center gap-4 text-emerald-400 hover:text-emerald-300 transition-colors font-bold">
                <Mail className="w-5 h-5" /> singhroshan2110@gmail.com
              </a>
              <a href="tel:+919769881160" className="flex items-center gap-4 text-violet-400 hover:text-violet-300 transition-colors font-bold">
                <Phone className="w-5 h-5" /> +91 97698 81160
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}