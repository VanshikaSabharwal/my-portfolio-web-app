"use client"

import { useEffect, useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"
import { IoLink, IoCheckmark } from "react-icons/io5"

export default function ShareRow({ title }: { title: string }) {
  const [url, setUrl] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable, ignore
    }
  }

  const shareBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[#D9CAB1] bg-[#FFFDF9] text-[#5C3A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A85B3E] hover:text-[#A85B3E]"

  return (
    <div className="flex gap-2.5">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={shareBtn}
      >
        <RiTwitterXFill className="text-base" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={shareBtn}
      >
        <FaLinkedin className="text-base" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className={shareBtn}
      >
        {copied ? <IoCheckmark className="text-base" /> : <IoLink className="text-base" />}
      </button>
    </div>
  )
}
