export const PAYMENT_LINKS = [
  {
    slug: 'aud',
    title: 'AU USD Payment',
    label: 'AU USD',
    pbId: 'pb_FOdzdEvPlSRt',
  },
  {
    slug: 'gbp',
    title: 'British Pound Payment',
    label: 'British Pound',
    pbId: 'pb_qTRJAayPNoKY',
  },
  {
    slug: 'eur',
    title: 'EUR Payment',
    label: 'EUR',
    pbId: 'pb_RhBJ89QEWDsJ',
  },
  {
    slug: 'usd',
    title: 'USD Payment',
    label: 'USD',
    pbId: 'pb_bBNFzSluLpuq',
  },
] as const

export type PaymentSlug = (typeof PAYMENT_LINKS)[number]['slug']
