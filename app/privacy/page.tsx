import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 - AI趋势观察",
  description: "AI趋势观察的隐私政策，了解我们如何收集、使用和保护您的个人信息。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p className="text-sm text-gray-500 mb-4">最后更新日期：2026年5月4日</p>
            <p>
              欢迎访问 AI趋势观察（以下简称"本站"）。我们非常重视您的隐私保护。本隐私政策旨在帮助您了解我们如何收集、使用、存储和保护您的个人信息。请您在使用本站服务前仔细阅读本政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">一、信息收集</h2>
            <p className="mb-2">本站可能收集以下类型的信息：</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>自动收集的信息</strong>：当您访问本站时，我们可能会自动收集您的浏览器类型、操作系统、访问时间、页面浏览记录等日志信息。</li>
              <li><strong>Cookie 和类似技术</strong>：本站使用 Cookie 来改善用户体验和分析网站流量。您可以通过浏览器设置管理 Cookie 偏好。</li>
              <li><strong>第三方服务数据</strong>：本站集成了 Google AdSense 广告服务，Google 可能会通过 Cookie 收集您的访问数据以展示个性化广告。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">二、信息使用</h2>
            <p className="mb-2">我们收集的信息将用于以下目的：</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>提供、维护和改进本站的服务</li>
              <li>分析网站使用情况，优化用户体验</li>
              <li>展示相关的广告内容</li>
              <li>遵守法律法规要求</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">三、第三方服务</h2>
            <p className="mb-2">本站使用以下第三方服务：</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google AdSense</strong>：用于展示广告。Google 可能会使用 Cookie 来根据您之前对本站或其他网站的访问情况展示广告。您可以访问 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google 广告设置</a> 来管理个性化广告偏好。</li>
              <li><strong>Vercel</strong>：用于网站托管和部署服务。</li>
              <li><strong>GitHub</strong>：用于代码托管。</li>
            </ul>
            <p className="mt-2">这些第三方服务有各自独立的隐私政策，我们建议您查阅其隐私政策以了解其数据处理实践。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">四、数据安全</h2>
            <p>
              我们采取合理的技术和管理措施来保护您的个人信息安全。但请注意，互联网传输并非完全安全，我们无法保证信息传输的绝对安全。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">五、您的权利</h2>
            <p className="mb-2">您有权：</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>访问和查看您的个人信息</li>
              <li>要求更正或删除您的个人信息</li>
              <li>撤回对 Cookie 的同意</li>
              <li>拒绝个性化广告</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">六、政策更新</h2>
            <p>
              我们可能会不时更新本隐私政策。更新后的政策将在本页面上发布，并更新"最后更新日期"。建议您定期查阅本政策以了解任何变更。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">七、联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>📧 邮箱：<a href="mailto:172449548@qq.com" className="text-blue-600 hover:underline">172449548@qq.com</a></li>
              <li>🔗 GitHub：<a href="https://github.com/yujiaqi0101/mynewsrepository" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">yujiaqi0101/mynewsrepository</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
