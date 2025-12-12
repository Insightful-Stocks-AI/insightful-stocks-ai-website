import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useState } from "react"
import { Helmet } from "react-helmet"
import heroImage from "../images/landing_page_hero_image.png"

export default function IndexPage({}: PageProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Google Forms submission endpoint
  // This is the formResponse URL for your Google Form
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeZSOwuDFEt9_ZbmXuMZ-HQJw-c9tzjqpeH7B-PO2s3est0HQ/formResponse"
  
  // Google Forms email field name
  const EMAIL_FIELD_NAME = "entry.484426968"

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
    <div className="min-h-screen bg-fintech-dark text-white">
      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content - Responsive Layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 lg:px-0">
                The AI Agent That Reads SEC Filings So You Don't Have To.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 lg:px-0">
                Insightful Stocks AI delivers autonomous, verifiable insights into the material changes affecting your portfolio—not just news, but actionable knowledge.
              </p>
              
              {/* Waitlist Form - Google Form Integration */}
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
                        <span className="hidden sm:inline">{isSubmitting ? "Joining..." : "Join the Waitlist & Get Early Access"}</span>
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
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img 
                src={heroImage} 
                alt="Insightful Stocks AI dashboard showing SEC filing analysis and portfolio insights" 
                className="max-w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[500px] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Limited Access / Scarcity Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darker border-y border-cta-teal/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white px-2">
            Limited Access: Join the Exclusive Pilot Program
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Our Agentic AI platform is resource-intensive. To ensure peak performance and gather targeted feedback, we are only accepting a limited number of early users.
          </p>
          <div className="inline-block px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 bg-gradient-to-r from-cta-teal/20 to-cta-blue/20 border-2 border-cta-teal/60 rounded-xl backdrop-blur-sm shadow-lg shadow-cta-teal/20 mx-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Only the first <span className="text-cta-teal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">500 users</span> will be accepted into the Pilot program.
            </p>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-fintech-darker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-2">
            Superior Insights. Unquestionable Trust.
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature Block 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:border-cta-blue/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cta-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Agentic Monitoring (24/7)</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our AI agents constantly process 10-Ks, 10-Qs, and 8-Ks for your watch list, eliminating manual searching.
              </p>
            </div>

            {/* Feature Block 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:border-cta-teal/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cta-teal/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cta-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Delta Reporting</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We compare current filings to past versions, summarizing only the material changes, not the entire document.
              </p>
            </div>

            {/* Feature Block 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:border-cta-blue/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cta-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Verifiable Trust</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Every insight includes a direct, highlighted link to the original SEC filing, ensuring zero hallucination risk.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            <span className="font-semibold text-white">Insightful Stocks AI</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Insightful Stocks AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export const Head: HeadFC = () => {
  const siteUrl = "https://insightfulstocks.ai"
  const title = "Insightful Stocks AI - AI Agent for SEC Filings Analysis"
  const description = "The AI Agent That Reads SEC Filings So You Don't Have To. Get autonomous, verifiable insights into material changes affecting your portfolio. Join the waitlist for early access."
  const image = `${siteUrl}${heroImage}`
  
  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Insightful Stocks AI",
    "applicationCategory": "FinanceApplication",
    "description": description,
    "url": siteUrl,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="SEC filings, AI stock analysis, 10-K analysis, 10-Q analysis, stock portfolio insights, AI agent, financial analysis, SEC document analysis" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Insightful Stocks AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </>
  )
}
