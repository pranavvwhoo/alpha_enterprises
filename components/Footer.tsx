import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter ,User} from 'lucide-react'
import Contact from '@/app/contact/page'

export default function Footer() {
  return (
    <footer className="bg-[#020406] text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center font-bold text-lg text-white group-hover:scale-110 transition-transform">
                α
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Alpha Enterprises
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Alpha Enterprises is an elite wellness consultancy dedicated to transforming lives through precision science and holistic coaching.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Exclusives</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/coaches" className="hover:text-white transition-colors">Coaches</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legacy</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>Roshan Sandeep Singh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>singhroshan2110@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 97698 81160</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-7 h-7" />
                <span>Unit No 1, Yadav Nagar, Kherani Road, Sakinaka, Mumbai-400072</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest transition-colors">
          <p>&copy; 2026 Alpha Enterprises. All Rights Reserved.</p>
          <p className="text-slate-600 hover:text-slate-400 cursor-default">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}