'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCircle, UserCheck, CreditCard, Scale, HelpCircle } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <FileText className="w-4 h-4" /> Legal Framework
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 premium-gradient-text tracking-tight">Terms of Service</h1>
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
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              Acceptance of Engagement
            </h2>
            <p className="text-slate-400 leading-relaxed">
              By accessing and utilizing the elite services of Alpha Enterprises, you acknowledge and agree to be bound by the sophisticated terms and provisions of this Master Service Agreement. Non-compliance with these protocols necessitates immediate termination of service access.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-violet-400" />
              Client Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Provision of high-fidelity biometric data',
                'Strict adherence to bespoke wellness protocols',
                'Pre-consultation with medical practitioners',
                'Maintaining absolute session confidentiality'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 p-4 rounded-xl bg-white/5 border border-white/5 text-sm">
                  <div className="w-1 h-1 rounded-full bg-violet-400" />
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
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-emerald-400" />
              Financial Protocols
            </h2>
            <ul className="space-y-4">
              {[
                'Capital allocations are mandatory in advance of service initiation.',
                'Asset return protocols are governed strictly by our Refund Policy.',
                'Service suspension may occur upon financial delinquency.',
                'Investment rates are subject to dynamic adjustment with prior notice.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 text-sm italic leading-relaxed">
                  <span className="text-emerald-400 font-bold">0{i+1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-rose-500/20 bg-rose-500/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6 text-rose-400" />
              Liability Limitations
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Alpha Enterprises shall not be held liable for indirect, incidental, or consequential impact arising from the utilization of our performance infrastructures. Our aggregate liability is strictly capped at the total capital investment paid for the specific services rendered.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10 bg-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              Legal Correspondence
            </h2>
            <p className="text-slate-400 mb-8">For formal inquiries regarding our legal architecture or terms of engagement:</p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Legal Counsel</p>
                <p className="text-white font-bold">legal@alpha-enterprises.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Global Support</p>
                <p className="text-white font-bold">+91 97698 81160</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}