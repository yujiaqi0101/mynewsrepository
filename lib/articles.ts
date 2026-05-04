export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  categoryId: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    slug: "ai-trends-2025-2026",
    title: "2025-2026年AI技术趋势深度解析：从大模型到智能体的范式革命",
    excerpt:
      "从DeepSeek R1的推理突破到AI Agent的全面爆发，从GPT-5的多模态融合到国产大模型的集体崛起，全面解读当前AI领域的核心技术趋势与产业变革。",
    date: "2026-05-04",
    tags: ["AI趋势", "大模型", "AI Agent", "多模态", "DeepSeek", "GPT-5"],
    author: "BigAI",
    categoryId: "llm",
    featured: true,
  },
];

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return articles
    .filter((article) => article.categoryId === categoryId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}
