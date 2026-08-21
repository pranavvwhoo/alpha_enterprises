'use client'

import { useEffect, useRef } from 'react'

export default function PayGlocalButton({ pbId }: { pbId: string }) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const script = document.createElement('script')
    script.src = 'https://oneclick.payglocal.in/simple.js'
    script.setAttribute('data-pb-id', pbId)
    form.appendChild(script)

    return () => {
      script.remove()
    }
  }, [pbId])

  return (
    <form
      ref={formRef}
      className="flex min-h-[52px] items-center justify-center [&_button]:premium-button [&_button]:cursor-pointer [&_button]:border-0 [&_button]:text-white"
    />
  )
}
