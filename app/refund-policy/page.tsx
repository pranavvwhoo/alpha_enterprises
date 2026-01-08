export default function RefundPolicy() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Refund Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 3, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Consultation Services</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds are available for consultations cancelled at least 24 hours in advance</li>
              <li>No refunds for no-shows or cancellations made less than 24 hours before the appointment</li>
              <li>Refunds will be processed within 5-7 business days</li>
              <li>Refunds will be issued to the original payment method</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Package Services</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Partial refunds available for unused sessions in multi-session packages</li>
              <li>Refunds must be requested within 30 days of purchase</li>
              <li>A 10% processing fee may apply to refunds</li>
              <li>Custom packages are non-refundable once services have begun</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Products</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Products can be returned within 14 days of delivery</li>
              <li>Items must be in original packaging and unused</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Refunds will be processed after receipt and inspection of returned items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Exceptions</h2>
            <p className="mb-4">
              Refunds may not be available for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Digital products or services that have been accessed</li>
              <li>Services that have been fully rendered</li>
              <li>Purchases made during promotional periods (subject to specific terms)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">Contact Us</h2>
            <p className="mb-4">
              For refund requests, please contact our support team:
            </p>
            <p>Email: singhroshan2110@gmail.com</p>
            <p>Phone: +919769881160</p>
          </section>
        </div>
      </div>
    </div>
  )
}