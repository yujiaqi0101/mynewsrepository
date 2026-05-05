import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isAdEnabled, ADSENSE_CLIENT_ID } from "@/lib/adsense";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI趋势观察 - 探索人工智能前沿",
  description:
    "聚焦AI领域最新技术趋势，深度解读大模型、AI Agent、多模态等核心方向，助力你把握人工智能时代脉搏。",
  keywords: ["AI", "人工智能", "大模型", "AI Agent", "多模态", "DeepSeek", "GPT", "技术趋势"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a1a" />
        {isAdEnabled && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
        }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
