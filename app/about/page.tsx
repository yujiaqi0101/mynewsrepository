import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - AI趋势观察",
  description: "了解AI趋势观察的使命、愿景、团队和内容理念。由资深AI从业者创建，专注于提供专业、深度的AI技术趋势分析。",
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

          {/* 创始人/作者介绍 - E-E-A-T 核心部分 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">👤</span>
              <h2 className="text-xl font-bold text-gray-100">关于 BigAI（创始人/主笔）</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* 作者头像区域 */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                  BA
                </div>
              </div>
              
              {/* 作者简介 */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">专业背景</h3>
                  <p className="text-gray-400 leading-relaxed">
                    BigAI 是 AI趋势观察的创建者和主要作者。拥有多年人工智能领域的技术研发和产品实践经验，曾参与多个大型AI项目的架构设计与落地实施。长期关注大语言模型、AI Agent、多模态AI等前沿技术方向，对行业发展趋势有深入的理解和独到的见解。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">内容理念</h3>
                  <p className="text-gray-400 leading-relaxed">
                    "在信息爆炸的时代，真正有价值的不是信息的数量，而是洞察的深度。我希望通过AI趋势观察，将复杂的技术趋势转化为清晰、有洞见的内容，帮助读者在AI浪潮中找到方向。"
                  </p>
                </div>
              </div>
            </div>
            
            {/* 专业领域标签 */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">专业领域</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">大语言模型</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">AI Agent</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">多模态AI</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">AI产品架构</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">技术趋势分析</span>
              </div>
            </div>
          </div>

          {/* 内容承诺 - E-E-A-T 信任信号 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">✅</span>
              <h2 className="text-xl font-bold text-gray-100">内容承诺</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-2">🔍 事实核查</h3>
                <p className="text-sm text-gray-400">每篇文章均经过事实核查，引用权威来源，确保信息准确可靠</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-2">💡 原创深度</h3>
                <p className="text-sm text-gray-400">拒绝浅尝辄止，每篇文章都包含原创分析和独立见解</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-2">📈 持续更新</h3>
                <p className="text-sm text-gray-400">AI领域日新月异，我们承诺持续跟踪最新动态并更新内容</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-2">🤝 读者优先</h3>
                <p className="text-sm text-gray-400">内容以读者价值为核心，不追求流量，只追求质量</p>
              </div>
            </div>
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
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">🚀 前沿科技</h3>
                <p className="text-sm text-gray-400">人形机器人、量子计算、脑机接口等突破</p>
              </div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-100 mb-1">📊 深度报告</h3>
                <p className="text-sm text-gray-400">行业深度分析，提供专业视角的AI趋势洞察</p>
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">📬</span>
              <h2 className="text-xl font-bold text-gray-100">联系我们</h2>
            </div>
            <p className="text-gray-400 mb-4">
              如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:172449548@qq.com" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300">
                <span>📧</span>
                <span>172449548@qq.com</span>
              </a>
              <a href="https://github.com/yujiaqi0101/mynewsrepository" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300">
                <span>💻</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
