'use client'

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
  MessagesSquare
} from 'lucide-react'

const programs = [
  {
    title: "1. Private Health & Lifestyle Consultation",
    price: "$100 – $250",
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
    title: "2. 30-Day Men's Personal Transformation Program",
    price: "$250 – $700",
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
    title: "3. VIP Private Mentorship Program",
    price: "$700 – $1000",
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
    title: "4. 90-Day Total Health Transformation Program",
    price: "$2,000 – $3,500",
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
    title: "5. Elite 6-Month Weight Loss Coaching Program",
    price: "$3,000 – $5,000",
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
    title: "6. Men’s Vitality & Performance Optimization Program",
    price: "$2,500 – $5,000",
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
    title: "7. 6-Month Longevity & Healthy Aging Coaching Program",
    price: "$3,000 – $7,000",
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
    title: "8. 1-Year Lifestyle Transformation & Performance Program",
    price: "$5,000 – $8,000",
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
    title: "9. VIP Personal Health Coaching – Annual Program",
    price: "$10,000 per year",
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
    title: "10. Digital Course + Coaching Package",
    price: "$2,000 – $4,000",
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
  const handlePayment = (programName: string, priceString: string) => {
    // Extract minimum numeric value from price string like "$100 – $250"
    const amountMatch = priceString.match(/\d+(?:,\d+)*/);
    const amount = amountMatch ? parseInt(amountMatch[0].replace(/,/g, '')) : 100;

    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      const options = {
        key: "rzp_live_S1OBgRIU2RJzSd",
        amount: amount * 100, // USD centers (same as paise logic but for dollars)
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
          ondismiss: function() {
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
            <p className="text-xl text-slate-400 font-medium">
              Specifically curated for our US & International Clients. 
              <span className="text-slate-200 ml-2 font-semibold">Exclusively priced in USD ($).</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full glass-card p-8 flex flex-col justify-between overflow-hidden relative">
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
                      <div className="text-2xl font-bold text-white tracking-tight">
                        {program.price}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-violet-300 transition-colors">
                    {program.title}
                  </h3>

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
                    onClick={() => handlePayment(program.title, program.price)}
                    className="w-full premium-button group/btn"
                  >
                    <span className="relative z-10">{program.buttonText}</span>
                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-slate-900 border border-slate-800 text-slate-500">
            <Activity className="w-4 h-4 mr-2" />
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">Legal Disclaimer</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed italic">
            "This program provides lifestyle coaching and educational wellness guidance. 
            It does not provide medical treatment, diagnosis, or replace professional medical advice."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
