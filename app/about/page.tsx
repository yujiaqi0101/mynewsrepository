import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - AI趋势观察",
  description: "了解AI趋势观察的使命、愿景和团队。",
};

export default function AboutPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">关于我们</h1>
        <div className="space-y-8">
          {/* 使命 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🎯</span>
              <h2 className="text-xl font-bold text-gray-100">我们的使命</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI趋势观察致力于成为中文互联网上最专业、最及时的AI技术趋势观察平台。我们相信，理解AI技术的发展方向，对于每一个从业者、学习者和决策者都至关重要。我们的使命是通过深度、准确、易懂的内容，帮助读者把握人工智能时代的技术脉搏。
            </p>
          </div>

          {/* 愿景 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🔭</span>
              <h2 className="text-xl font-bold text-gray-100">我们的愿景</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              让每个人都能理解AI、善用AI。我们希望打破技术壁垒，将复杂的AI技术趋势转化为清晰、有洞见的内容，让更多人能够参与到AI时代的机遇中来。
            </p>
          </div>

          {/* 内容方向 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">📚</span>
              <h2 className="text-xl font-bold text-gray-100">内容方向</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">🤖 AI大模型前沿</h3>
                <p className="text-sm text-gray-400">追踪全球大语言模型的最新进展与评测</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">🧠 AI Agent 观察</h3>
                <p className="text-sm text-gray-400">探索智能体技术的突破与应用场景</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">🎨 多模态AI应用</h3>
                <p className="text-sm text-gray-400">解读图像、视频、语音AI的最新突破</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">📰 行业动态</h3>
                <p className="text-sm text-gray-400">把握AI行业新闻与投融资脉搏</p>
              </div>
            </div>
          </div>

          {/* 团队 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">👥</span>
              <h2 className="text-xl font-bold text-gray-100">关于 BigAI</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              BigAI 是 AI趋势观察的创建者和主要作者。作为AI领域的长期关注者和实践者，BigAI 致力于以通俗易懂的方式解读复杂的技术趋势，帮助读者在信息爆炸的时代获取真正有价值的AI洞察。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
