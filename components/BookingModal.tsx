'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react'

const services = [
  { id: 'dietician', name: 'Dietician Advisory', description: 'Nutrition and diet coaching', price: 2500 },
  { id: 'fitness', name: 'Fitness Advisor', description: 'Exercise and fitness guidance', price: 3000 },
]

const coaches = [
  { id: 1, name: 'Dr. Aarav Sharma', specialization: 'Nutrition & Dietetics', rating: 4.9, price: 2500 },
  { id: 2, name: 'Rajesh Kumar', specialization: 'Fitness & Strength Training', rating: 4.8, price: 3000 },
  { id: 3, name: 'Priya Patel', specialization: 'Lifestyle Coaching', rating: 4.9, price: 2000 },
  { id: 4, name: 'Dr. Vikram Singh', specialization: 'Sports Medicine', rating: 4.7, price: 3500 },
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']

interface BookingModalProps {
  onClose: () => void
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    coach: null as any,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    goal: ''
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleServiceSelect = (serviceId: string) => {
    setBookingData({ ...bookingData, service: serviceId })
    nextStep()
  }

  const handleCoachSelect = (coach: any) => {
    setBookingData({ ...bookingData, coach })
    nextStep()
  }

  const handleDateTimeSelect = (date: string, time: string) => {
    setBookingData({ ...bookingData, date, time })
    nextStep()
  }

  const handleDetailsSubmit = (details: any) => {
    setBookingData({ ...bookingData, ...details })
    nextStep()
  }

  const initiatePayment = () => {
    const amount = bookingData.coach?.price || 2500
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      const options = {
        key: 'rzp_live_S1OBgRIU2RJzSd',
        amount: amount * 100,
        currency: 'INR',
        name: 'Alpha Enterprises',
        description: `Premium Coaching - ${bookingData.coach?.name}`,
        handler: function (response: any) {
          nextStep()
        },
        prefill: {
          name: bookingData.name,
          email: bookingData.email,
          contact: bookingData.phone
        },
        theme: {
          color: '#8b5cf6'
        }
      }
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#05070a]/90 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] glass-card border-white/10 flex flex-col overflow-hidden shadow-2xl shadow-violet-500/10"
        >
          {/* Header */}
          <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/5">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Reserve Your Session</h2>
              <p className="text-slate-400 text-sm">Step {step} of 6 — Professional Coaching</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / 6) * 100}%` }}
              className="h-full bg-gradient-to-r from-violet-600 to-emerald-400"
            />
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Select Elite Service
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <button 
                        key={service.id} 
                        onClick={() => handleServiceSelect(service.id)}
                        className="group text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-lg text-white group-hover:text-violet-400 transition-colors">{service.name}</h4>
                          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-violet-400 translate-x-0 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Select Master Coach</h3>
                    <button onClick={prevStep} className="flex items-center gap-1 text-slate-400 hover:text-white text-sm">
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {coaches.map((coach) => (
                      <button 
                        key={coach.id} 
                        onClick={() => handleCoachSelect(coach)}
                        className="text-left p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
                      >
                        <h4 className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{coach.name}</h4>
                        <p className="text-xs text-slate-400 mb-3 uppercase tracking-widest">{coach.specialization}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-400 text-sm font-bold">₹{coach.price}</span>
                          <span className="text-yellow-500 text-sm flex items-center gap-1">★ {coach.rating}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Schedule Session</h3>
                    <button onClick={prevStep} className="flex items-center gap-1 text-slate-400 hover:text-white text-sm">
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Select Date</label>
                    <input
                      type="date"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors"
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Available Slots</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-violet-600 hover:border-violet-500 transition-all text-slate-200"
                          onClick={() => handleDateTimeSelect(bookingData.date, time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Personal Blueprint</h3>
                    <button onClick={prevStep} className="flex items-center gap-1 text-slate-400 hover:text-white text-sm">
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                  </div>
                  
                  <form onSubmit={(e) => { e.preventDefault(); handleDetailsSubmit({
                    name: (e.target as any).name.value,
                    email: (e.target as any).email.value,
                    phone: (e.target as any).phone.value,
                    goal: (e.target as any).goal.value
                  })}} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Full Name" required className="col-span-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none" />
                    <input name="email" type="email" placeholder="Email Address" required className="col-span-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none" />
                    <input name="phone" placeholder="Contact Number" required className="col-span-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none" />
                    <select name="goal" required className="col-span-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none appearance-none">
                      <option value="" className="bg-[#05070a]">Primary Goal</option>
                      <option value="weight-loss" className="bg-[#05070a]">Fat Loss & Toning</option>
                      <option value="weight-gain" className="bg-[#05070a]">Muscle Hypertrophy</option>
                      <option value="fitness" className="bg-[#05070a]">Cognitive Performance</option>
                      <option value="longevity" className="bg-[#05070a]">Longevity & Vitality</option>
                    </select>
                    <button type="submit" className="col-span-2 premium-button mt-4 py-4">
                      Finalize Details
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div 
                  key="step5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Secure Checkout</h3>
                    <p className="text-slate-400">Review your bespoke consultation summary.</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 uppercase tracking-widest font-bold">Consultation</span>
                      <span className="text-white font-bold">{bookingData.coach?.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 uppercase tracking-widest font-bold">Schedule</span>
                      <span className="text-white font-bold">{bookingData.date} @ {bookingData.time}</span>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-white font-bold text-lg">Total Investment</span>
                      <span className="text-emerald-400 font-black text-2xl">₹{bookingData.coach?.price}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={prevStep} className="flex-1 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
                      Edit
                    </button>
                    <button onClick={initiatePayment} className="flex-[2] premium-button py-4 flex items-center justify-center gap-2">
                      <CreditCard className="w-5 h-5" /> Pay Securely
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div 
                  key="step6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="relative inline-block mb-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative z-10"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    </motion.div>
                    <div className="absolute inset-0 bg-emerald-500/20 blur-3xl animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">Booking Confirmed</h3>
                  <p className="text-slate-400 mb-12 max-w-sm mx-auto">
                    Your transformation begins now. A confirmation has been sent to <span className="text-white underline">{bookingData.email}</span>.
                  </p>
                  
                  <button onClick={onClose} className="premium-button w-full py-4">
                    Return to Dashboard
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}