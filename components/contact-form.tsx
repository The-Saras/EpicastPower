'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  const fieldClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number"
          className={fieldClass}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your Requirements"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        <Send className="mr-1 h-4 w-4" />
        Submit Message
      </Button>
    </form>
  )
}
