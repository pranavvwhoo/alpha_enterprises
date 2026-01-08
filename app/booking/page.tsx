'use client'

import { useState } from 'react'
import BookingModal from '../../components/BookingModal'

export default function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Book Your Session</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start your journey to better health. Choose from our expert dieticians and fitness advisors.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Start Booking
        </button>
      </div>

      {isModalOpen && (
        <BookingModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}