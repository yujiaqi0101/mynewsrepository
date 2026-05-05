export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "llm",
    name: "AI大模型前沿",
    icon: "🤖",
    description: "大语言模型最新进展与评测，追踪GPT、Claude、DeepSeek等前沿模型动态",
    slug: "llm",
  },
  {
    id: "agent",
    name: "AI Agent 观察",
    icon: "🧠",
    description: "智能体技术与应用，探索AI Agent如何改变工作与生活方式",
    slug: "agent",
  },
  {
    id: "multimodal",
    name: "多模态AI应用",
    icon: "🎨",
    description: "图像、视频、语音AI应用，解读多模态技术的最新突破",
    slug: "multimodal",
  },
  {
    id: "news",
    name: "行业动态",
    icon: "📰",
    description: "AI行业新闻与投融资，把握产业脉搏",
    slug: "news",
  },
  {
    id: "frontier",
    name: "前沿科技",
    icon: "🚀",
    description: "人形机器人、量子计算、脑机接口、核聚变、太空探索等前沿科技突破",
    slug: "frontier",
  },
  {
    id: "reports",
    name: "深度报告",
    icon: "📊",
    description: "行业深度分析报告，提供专业视角的AI趋势洞察",
    slug: "reports",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}
