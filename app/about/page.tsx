'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Heart, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 premium-gradient-text tracking-tight">Alpha Enterprises</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pioneering the future of lifestyle optimization through scientific precision and elite-level coaching.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 w-fit">
                <Shield className="w-8 h-8 text-violet-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                At Alpha Enterprises, our mission is to empower individuals to achieve optimal health and wellness through personalized, evidence-based coaching. We believe that everyone deserves access to professional guidance that transforms not just their bodies, but their entire lifestyles.
              </p>
            </motion.div>
            <div className="glass-card aspect-video relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-emerald-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 font-black text-6xl tracking-widest uppercase origin-center rotate-45">MISSION</div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 glass-card aspect-video relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 font-black text-6xl tracking-widest uppercase origin-center -rotate-45">VISION</div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="mb-6 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <Eye className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                We envision a world where preventive healthcare and lifestyle optimization are the foundation of every individual&apos;s well-being. Through our comprehensive approach, we aim to reduce the burden of chronic diseases and promote sustainable, healthy living for all.
              </p>
            </motion.div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Preventive Care', desc: 'Emphasizing longevity and prevention over treatment.', icon: Heart, color: 'text-rose-400' },
                { title: 'Holistic Wellness', desc: 'Addressing the synergy of physical, mental, and emotional health.', icon: Zap, color: 'text-amber-400' },
                { title: 'Personalized Strategy', desc: 'No templates. Only bespoke plans tailored to your unique biology.', icon: Shield, color: 'text-violet-400' },
                { title: 'Scientific Precision', desc: 'Grounding every recommendation in the latest performance research.', icon: Eye, color: 'text-emerald-400' },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 flex gap-6"
                >
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 h-fit ${pillar.color}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{pillar.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}