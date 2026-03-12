"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { getConsent } from "./CookieConsent";

const GA_ID = "G-45JS8HN09V";
const GA_DOMAIN = "cakewalk.ai";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const [isCorrectDomain, setIsCorrectDomain] = useState(false);

  useEffect(() => {
    setIsCorrectDomain(window.location.hostname.includes(GA_DOMAIN));
    setHasConsent(getConsent());

    const handleConsentChange = () => {
      setHasConsent(getConsent());
    };

    window.addEventListener("cookie-consent-change", handleConsentChange);
    return () => {
      window.removeEventListener("cookie-consent-change", handleConsentChange);
    };
  }, []);

  if (!hasConsent || !isCorrectDomain) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
