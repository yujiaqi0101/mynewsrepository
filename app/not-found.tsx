import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-8xl block mb-6">🔍</span>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">抱歉，您访问的页面不存在</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
        >
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
