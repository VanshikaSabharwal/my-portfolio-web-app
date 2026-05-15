'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LinkedInSetup() {
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)

  const clientId = '77ds3zcyy0li8f'
  const redirectUri = typeof window !== 'undefined' ? 
    `${window.location.origin}/linkedin-callback` : 
    'http://localhost:3000/linkedin-callback'

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=openid%20profile%20email`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">LinkedIn Authentication Setup</h1>
        <p className="text-gray-600 mb-6">Follow these steps to connect your LinkedIn account and fetch real recommendations.</p>

        {/* Step 1 */}
        <div className={`mb-6 p-4 rounded-lg border-2 ${step >= 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
              1
            </div>
            <h2 className="text-xl font-semibold">Add Client Secret to Environment</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Create or update your <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code> file:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto mb-3">
            <p>LINKEDIN_CLIENT_SECRET=YOUR_CLIENT_SECRET</p>
            <p>LINKEDIN_REDIRECT_URI=http://localhost:3000/linkedin-callback</p>
          </div>
          <p className="text-xs text-gray-600">
            Get CLIENT_SECRET from your <a href="https://www.linkedin.com/developers/apps" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn Developer Console</a>
          </p>
          <button
            onClick={() => {
              copyToClipboard('LINKEDIN_CLIENT_SECRET=YOUR_CLIENT_SECRET\nLINKEDIN_REDIRECT_URI=http://localhost:3000/linkedin-callback')
              setStep(2)
            }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            {copied ? '✓ Copied' : 'Copy to Clipboard'} & Continue
          </button>
        </div>

        {/* Step 2 */}
        <div className={`mb-6 p-4 rounded-lg border-2 ${step >= 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
              2
            </div>
            <h2 className="text-xl font-semibold">Restart Dev Server</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Stop and restart your Next.js dev server to load environment variables:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">npm run dev</div>
          <button
            onClick={() => setStep(3)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Server Restarted → Continue
          </button>
        </div>

        {/* Step 3 */}
        <div className={`mb-6 p-4 rounded-lg border-2 ${step >= 3 ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
              3
            </div>
            <h2 className="text-xl font-semibold">Click the Button Below to Authenticate</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            This will redirect you to LinkedIn to grant permission for fetching recommendations.
          </p>
          <a
            href={authUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            🔗 Connect with LinkedIn
          </a>
        </div>

        {/* Step 4 */}
        <div className={`p-4 rounded-lg border-2 ${step >= 4 ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
              4
            </div>
            <h2 className="text-xl font-semibold">View Your Recommendations</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            After authenticating, your real LinkedIn recommendations will appear on your portfolio.
          </p>
          <Link href="/" className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
            ← Back to Home
          </Link>
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> If you see an error about invalid scopes or API access, LinkedIn hasn't approved the Recommendations API for your app yet. 
            You may need to contact LinkedIn support or use the fallback JSON recommendations.
          </p>
        </div>
      </div>
    </div>
  )
}
