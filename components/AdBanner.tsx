"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT_ID, isAdEnabled } from "@/lib/adsense";

interface AdBannerProps {
  slot?: string;
  className?: string;
}

export default function AdBanner({ slot = "1234567890", className = "" }: AdBannerProps) {
  useEffect(() => {
    if (isAdEnabled) {
      try {
        // @ts-expect-error adsbygoogle is injected by the AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  if (!isAdEnabled) {
    return (
      <div className={`ad-placeholder flex items-center justify-center text-sm ${className}`}>
        <span>广告位 (728&times;90)</span>
      </div>
    );
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
