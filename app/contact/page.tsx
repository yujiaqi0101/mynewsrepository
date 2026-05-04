import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系方式 - AI趋势观察",
  description: "联系AI趋势观察团队。",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">联系我们</h1>
        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
            感谢您对 AI趋势观察 的关注！如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 邮箱 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">电子邮件</h2>
              </div>
              <p className="text-gray-600 mb-3">对于一般咨询、内容建议或合作提案，请发送邮件至：</p>
              <a
                href="mailto:172449548@qq.com"
                className="text-blue-600 hover:text-blue-700 font-medium text-lg"
              >
                172449548@qq.com
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">GitHub</h2>
              </div>
              <p className="text-gray-600 mb-3">本站开源代码托管在 GitHub 上，欢迎 Star 和贡献：</p>
              <a
                href="https://github.com/yujiaqi0101/mynewsrepository"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                yujiaqi0101/mynewsrepository →
              </a>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">❓ 常见问题</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">我可以投稿吗？</h3>
                <p className="text-gray-600 mt-1">欢迎！请通过邮件发送您的文章或投稿意向，我们会在3个工作日内回复。</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">文章内容有误怎么办？</h3>
                <p className="text-gray-600 mt-1">如果您发现文章中有事实性错误，请通过邮件告知我们，我们会尽快核实并更正。</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">可以转载文章吗？</h3>
                <p className="text-gray-600 mt-1">未经授权请勿转载。如需转载，请联系我们获取授权。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
