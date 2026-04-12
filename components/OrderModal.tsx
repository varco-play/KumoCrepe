'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Loader2 } from 'lucide-react'

const TOAST_URL = 'https://order.toasttab.com/online/kumo-312-university-drive'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const iframeRef    = useRef<HTMLIFrameElement>(null)
  const [loading, setLoading]       = useState(true)
  const [iframeBlocked, setBlocked] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset states when modal re-opens
  useEffect(() => {
    if (isOpen) { setLoading(true); setBlocked(false) }
  }, [isOpen])

  const handleIframeLoad = () => {
    setLoading(false)
    // Try to detect X-Frame-Options block (iframe loads but is empty)
    try {
      // If contentDocument is accessible but has no body content, it was blocked
      const doc = iframeRef.current?.contentDocument
      if (doc && doc.body && doc.body.innerHTML === '') {
        setBlocked(true)
      }
    } catch {
      // Cross-origin restriction = iframe is actually loaded (expected)
    }
  }

  const handleIframeError = () => {
    setLoading(false)
    setBlocked(true)
  }

  const openInNewTab = () => {
    window.open(TOAST_URL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 z-[101] bg-kumo-dark rounded-2xl border border-kumo-blue/20 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-kumo-card bg-kumo-bg shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-kumo-blue" />
                <span className="font-display text-kumo-cream font-semibold text-lg">
                  Kumo Crepe — Online Ordering
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openInNewTab}
                  title="Open in new tab"
                  className="text-kumo-muted hover:text-kumo-blue transition-colors p-1 cursor-pointer"
                >
                  <ExternalLink size={18} />
                </button>
                <button
                  onClick={onClose}
                  className="text-kumo-muted hover:text-kumo-cream transition-colors p-1 cursor-pointer"
                  aria-label="Close order modal"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative">
              {/* Loading spinner */}
              {loading && !iframeBlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-kumo-dark">
                  <Loader2 size={36} className="animate-spin text-kumo-blue" />
                  <p className="text-kumo-muted font-body text-sm">Loading ordering system…</p>
                </div>
              )}

              {/* Blocked fallback */}
              {iframeBlocked ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
                  <p className="font-display text-3xl text-kumo-cream">Ready to Order?</p>
                  <p className="text-kumo-muted font-body max-w-sm">
                    Click below to open our full ordering system in a new tab. It only takes a minute!
                  </p>
                  <button
                    onClick={openInNewTab}
                    className="flex items-center gap-2 px-8 py-4 bg-kumo-blue text-kumo-bg font-semibold rounded-full hover:bg-kumo-blue-light transition-colors cursor-pointer"
                  >
                    <ExternalLink size={18} />
                    Open Order Page
                  </button>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={TOAST_URL}
                  title="Kumo Crepe Online Ordering"
                  className="w-full h-full border-0"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  allow="payment"
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
