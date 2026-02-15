"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookie-consent-change"));
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs bg-zinc-900 rounded-lg shadow-lg border border-zinc-800 p-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
      <p className="text-sm text-zinc-400 mb-3">
        We use cookies to improve your experience.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export function getConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}
