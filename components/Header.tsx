"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllCategories } from "@/lib/categories";

const categories = getAllCategories();

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-xl neon-text">AI趋势观察</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              首页
            </Link>

            {/* 专栏下拉菜单 */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors font-medium flex items-center space-x-1">
                <span>专栏</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 glass-dropdown rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href="/"
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    >
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              联系方式
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a1a]">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2 text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>
              首页
            </Link>
            <div className="border-t border-white/10 pt-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">专栏</p>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href="/"
                  className="block py-1.5 text-gray-300 hover:text-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-white/10 pt-2">
              <Link href="/about" className="block py-2 text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>
                关于我们
              </Link>
              <Link href="/contact" className="block py-2 text-gray-300 hover:text-cyan-400 font-medium" onClick={() => setMobileMenuOpen(false)}>
                联系方式
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
