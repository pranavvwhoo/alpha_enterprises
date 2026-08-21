import type { Metadata } from 'next'
import PaymentPageContent from '@/components/PaymentPageContent'
import { PAYMENT_LINKS } from '@/lib/payment-links'

const config = PAYMENT_LINKS.find((l) => l.slug === 'eur')!

export const metadata: Metadata = {
  title: `${config.title} | Alpha Enterprises`,
}

export default function EurPaymentPage() {
  return <PaymentPageContent title={config.title} pbId={config.pbId} />
}
