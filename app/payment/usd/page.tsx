import type { Metadata } from 'next'
import PaymentPageContent from '@/components/PaymentPageContent'
import { PAYMENT_LINKS } from '@/lib/payment-links'

const config = PAYMENT_LINKS.find((l) => l.slug === 'usd')!

export const metadata: Metadata = {
  title: `${config.title} | Alpha Enterprises`,
}

export default function UsdPaymentPage() {
  return <PaymentPageContent pbId={config.pbId} />
}
