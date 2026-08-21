'use client'

import PayGlocalButton from './PayGlocalButton'

export default function PaymentPageContent({
  title,
  pbId,
}: {
  title: string
  pbId: string
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05070a] px-4">
      <div className="glass-card w-full max-w-md p-10 text-center">
        <div className="mb-2 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
            α
          </div>
        </div>
        <p className="mb-4 text-lg font-bold tracking-tight text-white">
          Alpha Enterprises
        </p>
        <h1 className="premium-gradient-text mb-3 text-2xl font-bold md:text-3xl">
          {title}
        </h1>
        <p className="mb-8 text-sm text-slate-400">
          Secure payment powered by PayGlocal
        </p>
        <PayGlocalButton pbId={pbId} />
      </div>
    </div>
  )
}
