'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME: Message = {
  role: 'assistant',
  content: "Bonjour! I'm Kumo, your cafe assistant ☁️ Ask me about our menu, hours, or how to order online!",
}

const SUGGESTIONS = [
  "What are your hours?",
  "What's on the menu?",
  "Where are you located?",
  "How do I order online?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen]   = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef             = useRef<HTMLDivElement>(null)
  const inputRef              = useRef<HTMLInputElement>(null)

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.content || data.error || 'Oops, something went wrong! Try again.' },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I lost connection for a moment — please try again or call us at (512) 855-3255!" },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1,    y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden border border-kumo-blue/20 shadow-2xl shadow-black/50"
            style={{ height: '500px' }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-kumo-dark border-b border-kumo-card shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-kumo-blue flex items-center justify-center text-kumo-bg font-bold text-sm font-display">
                  K
                </div>
                <div>
                  <p className="text-kumo-cream font-display font-semibold text-sm leading-tight">Kumo Assistant</p>
                  <p className="text-kumo-muted text-xs font-body">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-kumo-muted hover:text-kumo-cream transition-colors p-1 cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-kumo-bg">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed font-body ${
                      msg.role === 'user'
                        ? 'bg-kumo-blue text-kumo-bg font-medium rounded-br-sm'
                        : 'bg-kumo-card text-kumo-text border border-kumo-blue/10 rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-kumo-card border border-kumo-blue/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <Loader2 size={15} className="animate-spin text-kumo-blue" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestion chips — only on first message */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-kumo-bg flex flex-wrap gap-2 border-t border-kumo-card/50">
                {SUGGESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-kumo-blue/30 text-kumo-blue hover:bg-kumo-blue hover:text-kumo-bg transition-colors duration-150 font-body cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 px-4 py-3 bg-kumo-dark border-t border-kumo-card shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about menu, hours…"
                className="flex-1 bg-kumo-card border border-kumo-blue/20 rounded-full px-4 py-2 text-sm text-kumo-text placeholder:text-kumo-muted focus:outline-none focus:border-kumo-blue transition-colors font-body"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-full bg-kumo-blue flex items-center justify-center disabled:opacity-40 hover:bg-kumo-blue-light transition-colors duration-150 cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send size={14} className="text-kumo-bg" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle bubble */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-kumo-blue flex items-center justify-center shadow-xl shadow-kumo-blue/30 hover:bg-kumo-blue-light transition-colors duration-200 cursor-pointer"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{ rotate: 90,    opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} className="text-kumo-bg" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90,  opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} className="text-kumo-bg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
