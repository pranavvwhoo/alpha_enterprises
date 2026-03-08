'use client'

import { motion } from 'framer-motion'
import { User, Award, Star, Calendar } from 'lucide-react'
import Link from 'next/link'

const coaches = [
  {
    name: 'Dr. Aarav Sharma',
    specialization: 'Nutrition & Dietetics',
    experience: '8 years',
    rating: 4.9,
    qualifications: 'PhD in Nutrition, Certified Dietitian',
    color: 'text-emerald-400'
  },
  {
    name: 'Rajesh Kumar',
    specialization: 'Fitness & Strength Training',
    experience: '10 years',
    rating: 4.8,
    qualifications: 'Certified Personal Trainer, MSc in Exercise Science',
    color: 'text-violet-400'
  },
  {
    name: 'Priya Patel',
    specialization: 'Lifestyle Coaching',
    experience: '6 years',
    rating: 4.9,
    qualifications: 'Certified Life Coach, BSc in Psychology',
    color: 'text-rose-400'
  },
  {
    name: 'Dr. Vikram Singh',
    specialization: 'Sports Medicine',
    experience: '12 years',
    rating: 4.7,
    qualifications: 'MD, Board Certified in Sports Medicine',
    color: 'text-blue-400'
  },
]

export default function Coaches() {
  return (
    <div className="pt-32 pb-24 bg-[#05070a] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 premium-gradient-text tracking-tight">Master Coaches</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Direct access to the world&apos;s most elite health and performance strategists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent blur-2xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <User className={`w-10 h-10 ${coach.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-violet-400 transition-colors">{coach.name}</h3>
                <p className={`text-sm font-bold uppercase tracking-widest text-center mb-6 ${coach.color}`}>{coach.specialization}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{coach.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 shrink-0" />
                    <span>{coach.rating} Quality Score</span>
                  </div>
                </div>

                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs text-slate-500 uppercase font-black mb-2 tracking-tighter">Accreditations</p>
                  <p className="text-slate-300 text-xs leading-relaxed italic">{coach.qualifications}</p>
                </div>

                <Link 
                  href="/booking" 
                  className="w-full premium-button py-3 flex items-center justify-center gap-2 group/btn"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve Session
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}