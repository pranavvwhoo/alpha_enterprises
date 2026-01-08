'use client'

import { useState } from 'react'

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

  const handlePaymentSuccess = () => {
    nextStep() // Go to confirmation
  }

  const initiatePayment = () => {
    const amount = bookingData.coach?.price || 2500 // Default amount
    const options = {
      key: 'rzp_test_S13uikHbXNyeph',
      amount: amount,
      currency: 'INR',
      name: 'Alpha Enterprises',
      description: `Appointment with ${bookingData.coach?.name}`,
      handler: function (response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id)
        handlePaymentSuccess()
      },
      prefill: {
        name: bookingData.name,
        email: bookingData.email,
        contact: bookingData.phone
      },
      theme: {
        color: '#008080'
      }
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Book Your Session</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 ${
                s <= step ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {s}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose a Service</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-300 rounded-lg p-4 hover:border-teal-500 cursor-pointer" onClick={() => handleServiceSelect(service.id)}>
                    <h4 className="font-semibold text-teal-600">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose a Coach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coaches.map((coach) => (
                  <div key={coach.id} className="border border-gray-300 rounded-lg p-4 hover:border-teal-500 cursor-pointer" onClick={() => handleCoachSelect(coach)}>
                    <h4 className="font-semibold">{coach.name}</h4>
                    <p className="text-teal-600">{coach.specialization}</p>
                    <p className="text-yellow-600">★ {coach.rating}</p>
                  </div>
                ))}
              </div>
              <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Back</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className="px-3 py-2 border border-gray-300 rounded-md hover:bg-teal-100"
                      onClick={() => handleDateTimeSelect(bookingData.date, time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Back</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Enter Your Details</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleDetailsSubmit({
                name: (e.target as any).name.value,
                email: (e.target as any).email.value,
                phone: (e.target as any).phone.value,
                goal: (e.target as any).goal.value
              })}} className="space-y-4">
                <input name="name" placeholder="Name" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <input name="email" type="email" placeholder="Email" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <input name="phone" placeholder="Phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <select name="goal" required className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">Select Health Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="weight-gain">Weight Gain</option>
                  <option value="fitness">General Fitness</option>
                  <option value="diabetes">Diabetes Management</option>
                </select>
                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Back</button>
                  <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">Next</button>
                </div>
              </form>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Appointment Summary</h4>
                <p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
                <p><strong>Coach:</strong> {bookingData.coach?.name}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Amount:</strong> ₹{bookingData.coach?.price || 2500}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                You will be redirected to Razorpay secure payment gateway to complete your booking.
              </p>
              <div className="flex gap-4">
                <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Back</button>
                <button onClick={initiatePayment} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">Pay Now</button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Booking Confirmation</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Appointment Summary</h4>
                <p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
                <p><strong>Coach:</strong> {bookingData.coach?.name}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Name:</strong> {bookingData.name}</p>
                <p><strong>Email:</strong> {bookingData.email}</p>
                <p><strong>Goal:</strong> {bookingData.goal}</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl text-green-500 mb-2">✓</div>
                <p className="text-green-600 font-semibold">Your appointment has been successfully booked!</p>
              </div>
              <button onClick={onClose} className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}