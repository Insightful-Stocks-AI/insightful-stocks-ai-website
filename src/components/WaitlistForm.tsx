import * as React from "react"
import { useState } from "react"

// Google Forms submission endpoint
// This is the formResponse URL for your Google Form
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeZSOwuDFEt9_ZbmXuMZ-HQJw-c9tzjqpeH7B-PO2s3est0HQ/formResponse"

// Google Forms email field name
const EMAIL_FIELD_NAME = "entry.484426968"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create FormData to match Google Forms format
    const formData = new FormData()
    formData.append(EMAIL_FIELD_NAME, email)

    try {
      // Submit to Google Forms
      const response = await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms (CORS restriction)
        body: formData,
      })

      // With no-cors, we can't read the response, so assume success
      setSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error submitting form:", error)
      // Even on error, show success since we can't detect errors with no-cors
      setSubmitted(true)
      setEmail("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-8 sm:mt-12">
      {!submitted ? (
        <form 
          onSubmit={handleSubmit} 
          action={GOOGLE_FORM_ACTION}
          method="POST"
          className="max-w-md mx-auto px-2"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              name={EMAIL_FIELD_NAME}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              aria-label="Email address for waitlist"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cta-blue hover:bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="hidden sm:inline">{isSubmitting ? "Joining..." : "Join the Waitlist"}</span>
              <span className="sm:hidden">{isSubmitting ? "Joining..." : "Join Waitlist"}</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-md mx-auto px-2">
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-base sm:text-lg font-medium">
            You're on the list! We'll notify you when our beta opens.
          </div>
        </div>
      )}
    </div>
  )
}

