"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { getConsent } from "./CookieConsent";

const GA_ID = "G-45JS8HN09V";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(getConsent());

    const handleConsentChange = () => {
      setHasConsent(getConsent());
    };

    window.addEventListener("cookie-consent-change", handleConsentChange);
    return () => {
      window.removeEventListener("cookie-consent-change", handleConsentChange);
    };
  }, []);

  if (!hasConsent) return null;

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
