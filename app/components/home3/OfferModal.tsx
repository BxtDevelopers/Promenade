'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const BASE = 'https://promenade-dental.vercel.app'

interface OfferModalProps {
  isOpen:   boolean
  onClose:  () => void
}

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      aria-modal="true"
      role="dialog"
      aria-label="New patient welcome offer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        style={{ background: 'rgba(6,14,22,0.74)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-[430px] text-center rounded-[22px] z-10"
        style={{
          background:  '#173552',
          border:      '1px solid rgba(244,236,221,0.18)',
          padding:     '40px 36px 28px',
          boxShadow:   '0 50px 100px -30px rgba(0,0,0,0.85)',
          animation:   'offerIn 0.38s ease',
        }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[15px] top-[13px] bg-transparent border-none text-[24px] leading-none cursor-pointer transition-colors duration-200 hover:text-ivory"
          style={{ color: 'var(--muted)' }}
        >
          ×
        </button>

        <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-coral">
          Save &amp; Smile
        </div>

        <h3
          className="font-serif font-light leading-[1.12] text-ivory mt-3"
          style={{ fontSize: '31px' }}
        >
          $159{' '}
          <em className="italic text-coral">new-patient special</em>
        </h3>

        <p
          className="text-[14px] leading-[1.55] mt-[14px] mb-[22px]"
          style={{ color: 'var(--ivory-2)' }}
        >
          No insurance? No problem. This makes it easy to take that first step.
        </p>

        {submitted ? (
          <p
            className="text-[14.5px] leading-[1.5] py-[10px]"
            style={{ color: 'var(--ivory-2)' }}
          >
            Thank you — keep an eye on your inbox. (Connect email delivery to send the code.)
          </p>
        ) : (
          <>
            <ul
              className="list-none text-left mx-auto"
              style={{ display: 'table', margin: '0 auto 4px' }}
            >
              {[
                'Gentle cleaning',
                'Exam with Dr. Shriya',
                'Digital X-rays',
                "Need a deep cleaning? We'll credit part of this fee toward your treatment.",
              ].map(item => (
                <li
                  key={item}
                  className="relative pl-[26px] py-[6px] text-[13.5px] leading-[1.45]"
                  style={{ color: 'var(--ivory-2)' }}
                >
                  <span
                    className="absolute left-0 top-[6px] text-coral font-bold"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={`${BASE}/contact-us`}
              className="block w-full rounded-full text-center text-bg bg-coral font-sans text-[14px] font-semibold tracking-[0.03em] no-underline transition-colors duration-200 hover:bg-ivory mt-5"
              style={{ padding: '14px 22px' }}
            >
              Book your first visit
            </Link>
          </>
        )}

        <p className="mt-4 text-[13px]" style={{ color: 'var(--muted)' }}>
          or call{' '}
          <Link href="tel:+14808028188" className="text-coral no-underline hover:underline">
            (480) 802-8188
          </Link>
        </p>

        <p
          className="text-[10.5px] font-light leading-[1.5] mt-[18px]"
          style={{ color: 'var(--muted-2)' }}
        >
          Confirm what's included and AZ advertising rules before launch.
        </p>
      </div>
    </div>
  )
}