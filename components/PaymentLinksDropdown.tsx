'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, CreditCard } from 'lucide-react'
import { PAYMENT_LINKS } from '@/lib/payment-links'

export default function PaymentLinksDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm hover:text-white transition-colors"
      >
        <CreditCard className="h-4 w-4" />
        Payment Links
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="absolute bottom-full left-0 mb-2 min-w-[180px] rounded-xl border border-white/10 bg-[#0a0f16] py-2 shadow-xl">
          {PAYMENT_LINKS.map((link) => (
            <li key={link.slug}>
              <Link
                href={`/payment/${link.slug}`}
                className="block px-4 py-2.5 text-sm hover:bg-white/5 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
