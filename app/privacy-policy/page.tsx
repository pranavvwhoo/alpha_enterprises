'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Shield className="w-4 h-4" /> Secure Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 premium-gradient-text tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 text-sm italic font-medium">Last updated: March 8, 2026</p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-violet-400" />
              Information We Collect
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              At Alpha Enterprises, we collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes, but is not limited to:
            </p>
            <ul className="space-y-4">
              {[
                'Full name, email address, and verified contact information',
                'Biometric insights and health/fitness objectives',
                'Transactional data and payment verification',
                'Bespoke communication preferences'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-emerald-400" />
              Strategic Utilization
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">We utilize collected data to architect and refine your performance roadmap:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Advancing and scaling our elite service ecosystem',
                'Securing transactions and facilitating financial auditing',
                'Dispatching technical protocols and operational messages',
                'Architecting high-conversion promotional strategies',
                'Hyper-personalizing the premium client interface'
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Data Safeguarding</h2>
            <p className="text-slate-400 leading-relaxed">
              We implement industry-leading encryption and cybersecurity protocols to isolate your personal information against unauthorized infiltration. We prioritize data sovereignty and client confidentiality above all else.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10 bg-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Direct Access</h2>
            <p className="text-slate-400 mb-8">For any inquiries regarding your data rights or our privacy architecture:</p>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="mailto:singhroshan2110@gmail.com" className="flex items-center gap-4 text-emerald-400 hover:text-emerald-300 transition-colors">
                <Mail className="w-5 h-5" /> singhroshan2110@gmail.com
              </a>
              <a href="tel:+919769881160" className="flex items-center gap-4 text-violet-400 hover:text-violet-300 transition-colors">
                <Phone className="w-5 h-5" /> +91 97698 81160
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}