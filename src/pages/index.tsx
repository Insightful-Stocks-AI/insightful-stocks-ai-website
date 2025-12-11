import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useState } from "react"

export default function IndexPage({}: PageProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call - replace with actual waitlist service integration
    // For now, we'll just show success after a brief delay
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setEmail("")
    }, 500)
  }

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The AI Agent That Reads SEC Filings So You Don't Have To.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Insightful Stocks AI delivers autonomous, verifiable insights into the material changes affecting your portfolio—not just news, but actionable knowledge.
          </p>
          
          {/* Waitlist Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-cta-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist & Get Early Access"}
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="px-6 py-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-lg font-medium">
                You're on the list! We'll notify you when our beta opens.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Limited Access / Scarcity Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darker border-y border-cta-teal/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
            Limited Access: Join the Exclusive Pilot Program
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our Agentic AI platform is resource-intensive. To ensure peak performance and gather targeted feedback, we are only accepting a limited number of early users.
          </p>
          <div className="inline-block px-8 md:px-10 py-6 md:py-7 bg-gradient-to-r from-cta-teal/20 to-cta-blue/20 border-2 border-cta-teal/60 rounded-xl backdrop-blur-sm shadow-lg shadow-cta-teal/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Only the first <span className="text-cta-teal text-2xl md:text-3xl lg:text-4xl font-extrabold">500 users</span> will be accepted into the Pilot program.
            </p>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="px-4 py-20 md:py-32 bg-fintech-darker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Superior Insights. Unquestionable Trust.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Block 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cta-blue/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-cta-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Agentic Monitoring (24/7)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our AI agents constantly process 10-Ks, 10-Qs, and 8-Ks for your watch list, eliminating manual searching.
              </p>
            </div>

            {/* Feature Block 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cta-teal/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-cta-teal/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cta-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Delta Reporting</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We compare current filings to past versions, summarizing only the material changes, not the entire document.
              </p>
            </div>

            {/* Feature Block 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cta-blue/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-cta-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Verifiable Trust</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Every insight includes a direct, highlighted link to the original SEC filing, ensuring zero hallucination risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-white">Insightful Stocks AI</span>
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Insightful Stocks AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export const Head: HeadFC = () => (
  <>
    <title>Insightful Stocks AI - Join the Waitlist</title>
    <meta name="description" content="The AI Agent That Reads SEC Filings So You Don't Have To. Get autonomous, verifiable insights into material changes affecting your portfolio." />
  </>
)
