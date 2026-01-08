import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-600">
          Alpha Enterprises
        </Link>
        <nav className="hidden md:flex space-x-4 text-sm">
          <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-teal-600 transition-colors">Pricing</Link>
          <Link href="/coaches" className="text-gray-700 hover:text-teal-600 transition-colors">Coaches</Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</Link>
        </nav>
        <Link href="/booking" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
          Book Now
        </Link>
      </div>
      <div className="md:hidden bg-gray-50 px-4 py-2">
        <nav className="flex flex-wrap gap-2 text-xs">
          <Link href="/" className="text-gray-700 hover:text-teal-600">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-teal-600">Services</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-teal-600">Pricing</Link>
          <Link href="/coaches" className="text-gray-700 hover:text-teal-600">Coaches</Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-teal-600">Privacy</Link>
          <Link href="/refund-policy" className="text-gray-700 hover:text-teal-600">Refunds</Link>
          <Link href="/terms-and-conditions" className="text-gray-700 hover:text-teal-600">Terms</Link>
        </nav>
      </div>
    </header>
  )
}