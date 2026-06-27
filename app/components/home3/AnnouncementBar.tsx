'use client'

import { useState } from 'react'

interface AnnouncementBarProps {
  onOpenModal: () => void
}

export default function AnnouncementBar({ onOpenModal }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className="relative z-30 flex items-center justify-center h-[46px] px-[46px]"
      style={{
        background: 'rgba(232,154,114,0.12)',
        borderBottom: '1px solid rgba(232,154,114,0.22)',
      }}
    >
      <button
        type="button"
        onClick={onOpenModal}
        className="flex items-center gap-[9px] bg-transparent border-none cursor-pointer font-sans text-[13px] tracking-[0.04em] text-ivory"
      >
        <span className="text-coral">✦</span>
        New patient special: $159 cleaning, exam &amp; X-rays
        <span
          className="text-coral transition-transform duration-[250ms] group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none text-muted text-[17px] leading-none cursor-pointer px-1 hover:text-ivory transition-colors duration-200"
      >
        ×
      </button>
    </div>
  )
}