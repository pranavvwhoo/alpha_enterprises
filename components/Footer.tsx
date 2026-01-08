import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alpha Enterprises</h3>
            <p>Transforming health and lifestyles through personalized coaching.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
              <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400">Pricing</Link></li>
              <li><Link href="/coaches" className="hover:text-teal-400">Coaches</Link></li>
              <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-teal-400">Refund Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-teal-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>Email: singhroshan2110@gmail.com</p>
            <p>Phone: +919769881160</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2026 Alpha Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}