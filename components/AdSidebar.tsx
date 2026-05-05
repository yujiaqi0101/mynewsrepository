"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT_ID, isAdEnabled } from "@/lib/adsense";

interface AdSidebarProps {
  slot?: string;
  className?: string;
}

export default function AdSidebar({ slot = "0987654321", className = "" }: AdSidebarProps) {
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
      <div className={`ad-placeholder flex items-center justify-center text-sm min-h-[250px] ${className}`}>
        <span>广告位 (300&times;250)</span>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="rectangle"
        data-full-width-responsive="true"
      />
    </div>
  );
}
