'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Bespoke inquiry received. Our concierge will contact you shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 premium-gradient-text tracking-tight">Connect With Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Begin your journey towards peak performance and longevity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-violet-400" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Email Enquiries</p>
                    <p className="text-white font-medium">singhroshan2110@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Direct Line</p>
                    <p className="text-white font-medium">+91 97698 81160</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <MapPin className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Headquarters</p>
                    <p className="text-white font-medium">Premium Digital Concierge, Global</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border-emerald-500/20 bg-emerald-500/5">
              <p className="text-emerald-400 text-sm font-bold leading-relaxed">
                Note: Our master coaches operate on a limited availability basis. Inquiries are processed in the order they are received.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send a Priority Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-black tracking-widest">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-black tracking-widest">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@alpha-performance.com"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-black tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How can we assist your transformation?"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full premium-button py-4 flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}