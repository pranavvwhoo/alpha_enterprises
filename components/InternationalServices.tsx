'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Crown,
  Zap,
  Scale,
  Activity,
  Heart,
  Calendar,
  Star,
  PlayCircle,
  CheckCircle2,
  Clock,
  Video,
  MessagesSquare,
  AlertCircle
} from 'lucide-react'

const programs = [
  {
    id: 'p1',
    title: "1. Private Health & Lifestyle Consultation",
    minPrice: 100,
    maxPrice: 250,
    duration: "30–45 minute session",
    platform: "WhatsApp or Zoom",
    includes: [
      "Performance lifestyle guidance",
      "Diet suggestions",
      "Exercise recommendations"
    ],
    buttonText: "Book Consultation",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 'p2',
    title: "2. 30-Day Men's Personal Transformation Program",
    minPrice: 250,
    maxPrice: 700,
    duration: "30 Days",
    includes: [
      "Goal setting",
      "Fitness & stamina routine",
      "Mindset training",
      "Weekly progress review"
    ],
    buttonText: "Join Program",
    icon: Target,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 'p3',
    title: "3. VIP Private Mentorship Program",
    minPrice: 700,
    maxPrice: 1000,
    duration: "3 Months",
    includes: [
      "1-on-1 mentorship for 3 months",
      "Unlimited chat support",
      "Monthly strategy calls",
      "Personalized lifestyle improvement plan"
    ],
    buttonText: "Apply for Mentorship",
    icon: Crown,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 'p4',
    title: "4. 90-Day Total Health Transformation Program",
    minPrice: 2000,
    maxPrice: 3500,
    duration: "90 Days",
    includes: [
      "Personalized diet plan",
      "Weekly Zoom coaching calls",
      "Lifestyle improvement guidance",
      "Fitness routine planning",
      "Habit tracking"
    ],
    buttonText: "Start Transformation",
    icon: Zap,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: 'p5',
    title: "5. Elite 6-Month Weight Loss Coaching Program",
    minPrice: 3000,
    maxPrice: 5000,
    duration: "6 Months",
    includes: [
      "Custom meal plans",
      "Exercise routines",
      "Weekly progress check",
      "Accountability coaching",
      "WhatsApp / email support"
    ],
    buttonText: "Enroll Now",
    icon: Scale,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 'p6',
    title: "6. Men’s Vitality & Performance Optimization Program",
    minPrice: 2500,
    maxPrice: 5000,
    duration: "Focus on Performance",
    includes: [
      "Lifestyle guidance for men’s vitality",
      "Fitness routine",
      "Diet improvement",
      "Stress reduction strategies"
    ],
    buttonText: "Optimize Performance",
    icon: Activity,
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 'p7',
    title: "7. 6-Month Longevity & Healthy Aging Coaching Program",
    minPrice: 3000,
    maxPrice: 7000,
    duration: "6 Months",
    includes: [
      "Longevity diet plan",
      "Sleep optimization",
      "Metabolic health improvement",
      "Exercise guidance"
    ],
    buttonText: "Join Longevity Program",
    icon: Heart,
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    id: 'p8',
    title: "8. 1-Year Lifestyle Transformation & Performance Program",
    minPrice: 5000,
    maxPrice: 8000,
    duration: "1 Year",
    includes: [
      "Quarterly coaching sessions",
      "Customized health plans",
      "Habit building system",
      "Progress tracking"
    ],
    buttonText: "Apply Now",
    icon: Calendar,
    color: "from-teal-500/20 to-emerald-500/20"
  },
  {
    id: 'p9',
    title: "9. VIP Personal Health Coaching – Annual Program",
    minPrice: 10000,
    maxPrice: 10000,
    duration: "Annual Access",
    includes: [
      "Unlimited consultations",
      "Monthly personal health strategy sessions",
      "Custom nutrition and fitness planning",
      "Direct WhatsApp support"
    ],
    buttonText: "Apply for VIP Access",
    icon: Star,
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    id: 'p10',
    title: "10. Digital Course + Coaching Package",
    minPrice: 2000,
    maxPrice: 4000,
    duration: "Blended Learning",
    includes: [
      "Recorded health course",
      "Meal planning guides",
      "Workout routines",
      "Monthly group coaching calls"
    ],
    buttonText: "Buy Course",
    icon: PlayCircle,
    color: "from-sky-500/20 to-indigo-500/20"
  }
]

export default function InternationalServices() {
  const [selectedPrices, setSelectedPrices] = useState<Record<string, 'min' | 'max'>>(
    Object.fromEntries(programs.map(p => [p.id, 'min']))
  );

  const togglePrice = (id: string, type: 'min' | 'max') => {
    setSelectedPrices(prev => ({ ...prev, [id]: type }));
  };

  const handlePayment = (programName: string, amount: number) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      const options = {
        key: "rzp_live_S1OBgRIU2RJzSd",
        amount: amount * 100, // USD cents
        currency: "USD",
        name: "Alpha Enterprises",
        description: programName,
        handler: function (response: any) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Global Client",
          email: "client@alpha-enterprises.com",
        },
        theme: {
          color: "#8b5cf6",
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout form closed");
          }
        }
      };

      try {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Razorpay Error:", error);
        alert("There was an error initializing the payment. Please try again.");
      }
    } else {
      alert("Razorpay script is still loading. Please wait a moment and click again.");
    }
  }

  return (
    <section className="relative py-24 overflow-hidden" id="international">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase rounded-full bg-emerald-400/10 border border-emerald-400/20">
              International Premium Only
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 premium-gradient-text tracking-tight">
              Premium International Wellness Programs
            </h2>
            
            {/* New Disclaimer Added Here */}
            <div className="mb-10 p-4 border border-rose-500/30 bg-rose-500/5 rounded-2xl inline-block max-w-2xl">
              <p className="text-rose-400 text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                THE PROGRAM PROVIDES LIFESTYLE COACHING AND EDUCATIONAL GUIDANCE AND DOES NOT REPLACE MEDICAL ADVICE
              </p>
            </div>

            <p className="text-xl text-slate-400 font-medium mt-4">
              Specifically curated for our US & International Clients.
              <span className="text-slate-200 ml-2 font-semibold">Exclusively priced in USD ($).</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => {
            const isSelected = selectedPrices[program.id] === 'max';
            const currentPrice = isSelected ? program.maxPrice : program.minPrice;
            const hasRange = program.minPrice !== program.maxPrice;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full glass-card p-8 flex flex-col justify-between overflow-hidden relative border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                  {/* Background Sparkle */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <program.icon className="w-8 h-8 text-violet-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-400 mb-1 flex items-center justify-end gap-1">
                          <Clock className="w-3 h-3" /> {program.duration}
                        </div>
                        <div className="text-3xl font-bold text-white tracking-tight">
                          ${currentPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-violet-300 transition-colors h-14">
                      {program.title}
                    </h3>

                    {/* Price Selector */}
                    {hasRange && (
                      <div className="flex bg-white/5 p-1 rounded-xl mb-8 border border-white/10">
                        <button
                          onClick={() => togglePrice(program.id, 'min')}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${!isSelected ? 'bg-violet-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                          Standard (${program.minPrice.toLocaleString()})
                        </button>
                        <button
                          onClick={() => togglePrice(program.id, 'max')}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${isSelected ? 'bg-violet-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                          Premium (${program.maxPrice.toLocaleString()})
                        </button>
                      </div>
                    )}

                    <div className="space-y-4 mb-8">
                      {program.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => handlePayment(program.title, currentPrice)}
                      className="w-full premium-button group/btn py-4"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {program.buttonText} 
                        <span className="text-xs opacity-60">(${currentPrice.toLocaleString()})</span>
                      </span>
                      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Removed bottom disclaimer as it's now at the top */}
      </div>
    </section>
  )
}
