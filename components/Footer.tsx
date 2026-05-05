import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

const categories = getAllCategories();

export default function Footer() {
  return (
    <footer className="bg-[#050510] text-gray-400">
      {/* 顶部渐变分割线 */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-xl text-gray-100">AI趋势观察</span>
            </div>
            <p className="text-sm text-gray-400">
              聚焦AI领域最新技术趋势，深度解读大模型、AI Agent、多模态等核心方向，助力你把握人工智能时代脉搏。
            </p>
          </div>

          {/* 专栏链接 */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">专栏</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href="/" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于 */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">关于</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  联系方式
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>

          {/* 社交链接 */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">关注我们</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yujiaqi0101/mynewsrepository"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:172449548@qq.com" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  邮箱联系
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI趋势观察. All rights reserved. Powered by BigAI.</p>
        </div>
      </div>
    </footer>
  );
}
