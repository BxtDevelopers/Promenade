'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface ArchFieldProps {
  mouseX?: number
  mouseY?: number
}

// Pre-computed arch data to avoid hydration issues
const ARCHES = [
  { r: 80,  delay: 0,    isIvory: false },
  { r: 135, delay: 0.12, isIvory: false },
  { r: 195, delay: 0.24, isIvory: false },
  { r: 260, delay: 0.36, isIvory: true  },
  { r: 330, delay: 0.48, isIvory: false },
  { r: 405, delay: 0.60, isIvory: false },
  { r: 485, delay: 0.72, isIvory: false },
  { r: 570, delay: 0.84, isIvory: false },
  { r: 660, delay: 0.96, isIvory: true  },
  { r: 755, delay: 1.08, isIvory: false },
  { r: 855, delay: 1.20, isIvory: false },
  { r: 960, delay: 1.32, isIvory: false },
]

export default function ArchField({ mouseX = 0, mouseY = 0 }: ArchFieldProps) {
  const offsetX = mouseX * 18
  const offsetY = mouseY * 10

  return (
    <svg
      viewBox="0 0 900 540"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <radialGradient id="arch-fade" cx="50%" cy="100%" r="70%">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="arch-mask">
          <rect width="900" height="540" fill="url(#arch-fade)" />
        </mask>
      </defs>

      <g mask="url(#arch-mask)">
        {ARCHES.map((arch, i) => {
          const cx = 450 + offsetX * (arch.r / 960)
          const cy = 580 + offsetY * (arch.r / 960)
          const opacity = arch.isIvory ? 0.18 : 0.09

          return (
            <motion.path
              key={i}
              d={`M ${cx - arch.r} ${cy} A ${arch.r} ${arch.r} 0 0 1 ${cx + arch.r} ${cy}`}
              stroke={arch.isIvory ? '#E89A72' : '#F4ECDC'}
              strokeWidth={arch.isIvory ? '1.2' : '0.7'}
              fill="none"
              opacity={0}
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1}
              animate={{ strokeDashoffset: 0, opacity }}
              transition={{
                strokeDashoffset: {
                  delay: arch.delay + 0.3,
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  delay: arch.delay + 0.3,
                  duration: 0.6,
                },
              }}
            />
          )
        })}
      </g>

      {/* Subtle glow at origin */}
      <motion.ellipse
        cx={450 + offsetX}
        cy={580}
        rx="200"
        ry="80"
        fill="rgba(232,154,114,0.04)"
        animate={{ rx: [200, 220, 200], ry: [80, 90, 80] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}