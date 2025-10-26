"use client";
import { useRef, useState } from "react";
import BackButton from "./BackToPreviousPage/page";

interface Props {
  url: string;
}

export default function ShareInput({ url }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const handleFocus = () => {
    inputRef.current?.select();
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
      });
    }
  };

  // Social share URLs
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="space-y-4">

<BackButton />

      {/* Input + Copy button */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          ref={inputRef}
          type="text"
          value={url}
          readOnly
          onFocus={handleFocus}
          className="flex-1 border p-2 rounded w-full"
        />
        <button
          onClick={handleCopy}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-full sm:w-auto"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Social share buttons */}
      <div className="flex flex-wrap gap-2">
        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-center"
        >
          WhatsApp
        </a>
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-center"
        >
          X
        </a>
        <a
          href={linkedInShare}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition text-center"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
